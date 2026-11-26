"""Optimalizace fotek z _originals/ do assets/img/ (WebP) + generování assets/js/data-fotky.js.

Spuštění z kořene projektu:  python tools/optimize-images.py
Přepsat i nezměněné fotky:   python tools/optimize-images.py --force
"""
import json
import sys
from datetime import datetime
from fractions import Fraction
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Chybí knihovna Pillow. Nainstalujte ji příkazem:  python -m pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "_originals"
OUT = ROOT / "assets" / "img"
DATA_JS = ROOT / "assets" / "js" / "data-fotky.js"
META_JSON = Path(__file__).resolve().parent / "fotky-popisky.json"

EXTS = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"}
QUALITY = 80
THUMB = 600
SIZES = {"carousel": 2000, "portret": 800, "projekty": 1600, "galerie": 1600}
WITH_THUMB = {"projekty", "galerie"}

EXIF_IFD = 0x8769
TAG_MAKE, TAG_MODEL, TAG_DATETIME = 0x010F, 0x0110, 0x0132
TAG_EXPOSURE, TAG_FNUMBER, TAG_ISO = 0x829A, 0x829D, 0x8827
TAG_DATE_ORIG, TAG_FOCAL, TAG_LENS = 0x9003, 0x920A, 0xA434


def slug(name):
    return "".join(c if c.isalnum() or c in "-_" else "-" for c in name.lower()).strip("-")


def num(v):
    try:
        return float(v)
    except (TypeError, ValueError, ZeroDivisionError):
        return None


def read_exif(img):
    exif = img.getexif()
    sub = exif.get_ifd(EXIF_IFD)
    get = lambda tag: sub.get(tag, exif.get(tag))

    info = {}
    raw_date = get(TAG_DATE_ORIG) or exif.get(TAG_DATETIME)
    if raw_date:
        try:
            info["date"] = datetime.strptime(str(raw_date).strip("\x00 "), "%Y:%m:%d %H:%M:%S").strftime("%Y-%m-%d")
        except ValueError:
            pass

    make = str(exif.get(TAG_MAKE) or "").strip("\x00 ")
    model = str(exif.get(TAG_MODEL) or "").strip("\x00 ")
    if model:
        info["camera"] = model if make.split(" ")[0].lower() in model.lower() else f"{make} {model}".strip()

    lens = str(get(TAG_LENS) or "").strip("\x00 ")
    if lens:
        info["lens"] = lens

    f = num(get(TAG_FNUMBER))
    if f:
        info["aperture"] = f"f/{f:g}"

    t = num(get(TAG_EXPOSURE))
    if t:
        info["shutter"] = f"{t:g} s" if t >= 1 else f"1/{round(1 / t)} s" if (1 / t) >= 2 else f"{Fraction(t).limit_denominator(10)} s"

    iso = get(TAG_ISO)
    if isinstance(iso, (tuple, list)):
        iso = iso[0] if iso else None
    if iso:
        info["iso"] = int(iso)

    focal = num(get(TAG_FOCAL))
    if focal:
        info["focal"] = f"{focal:g} mm"
    return info


def trim_transparent(img):
    """Ořízne průhledné okraje (např. u panoramat složených z více fotek) na největší plně neprůhledný obdélník."""
    if "A" not in img.getbands():
        return img
    alpha = img.getchannel("A")
    if alpha.getextrema()[0] >= 250:
        return img
    step = max(1, max(img.size) // 600)
    small = alpha.reduce(step)
    w, h = small.size
    px = small.load()
    opaque = lambda x, y: px[x, y] >= 250
    left, top, right, bottom = 0, 0, w - 1, h - 1

    def bad(edge):
        if edge == "l": return sum(not opaque(left, y) for y in range(top, bottom + 1))
        if edge == "r": return sum(not opaque(right, y) for y in range(top, bottom + 1))
        if edge == "t": return sum(not opaque(x, top) for x in range(left, right + 1))
        return sum(not opaque(x, bottom) for x in range(left, right + 1))

    while left < right and top < bottom:
        counts = {e: bad(e) for e in "lrtb"}
        worst = max(counts, key=counts.get)
        if counts[worst] == 0:
            break
        if worst == "l": left += 1
        elif worst == "r": right -= 1
        elif worst == "t": top += 1
        else: bottom -= 1

    box = ((left + 1) * step, (top + 1) * step, right * step, bottom * step)
    return img.crop(box)


def apply_crop(img, crop):
    """Ruční ořez z fotky-popisky.json: "crop": [vlevo, nahoře, vpravo, dole] jako podíl 0–1 odříznutý z každé strany."""
    if not crop:
        return img
    w, h = img.size
    l, t, r, b = crop
    return img.crop((round(w * l), round(h * t), round(w * (1 - r)), round(h * (1 - b))))


def save_webp(img, dest, max_side, force, src_mtime):
    if not force and dest.exists() and dest.stat().st_mtime >= src_mtime:
        with Image.open(dest) as done:
            return done.size
    resized = img.copy()
    resized.thumbnail((max_side, max_side), Image.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    resized.save(dest, "WEBP", quality=QUALITY, method=6)
    return resized.size


def process(path, group, force, extra, meta_mtime):
    rel_dir = path.parent.relative_to(SRC)
    base = slug(path.stem)
    dest = OUT / rel_dir / f"{base}.webp"
    mtime = max(path.stat().st_mtime, meta_mtime if "crop" in extra else 0)

    with Image.open(path) as img:
        info = read_exif(img)
        img = ImageOps.exif_transpose(img)
        img = trim_transparent(img)
        img = apply_crop(img, extra.get("crop"))
        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")
        w, h = save_webp(img, dest, SIZES[group], force, mtime)
        entry = {"src": dest.relative_to(ROOT).as_posix(), "w": w, "h": h}
        written = [dest]
        if group in WITH_THUMB:
            tdest = OUT / rel_dir / f"{base}-thumb.webp"
            tw, th = save_webp(img, tdest, THUMB, force, mtime)
            entry.update(thumb=tdest.relative_to(ROOT).as_posix(), tw=tw, th=th)
            written.append(tdest)

    entry.update(info)
    return entry, written


def main():
    force = "--force" in sys.argv
    if not SRC.is_dir():
        sys.exit(f"Složka {SRC} neexistuje.")

    meta = json.loads(META_JSON.read_text(encoding="utf-8")) if META_JSON.exists() else {}
    meta_mtime = META_JSON.stat().st_mtime if META_JSON.exists() else 0
    cat_labels = meta.pop("_kategorie", {})

    data = {"categories": [], "carousel": [], "portret": [], "projekty": [], "gallery": []}
    produced = set()
    count = 0

    for group in SIZES:
        base = SRC / group
        if not base.is_dir():
            continue
        files = sorted(
            p for p in base.rglob("*")
            if p.is_file() and p.suffix.lower() in EXTS
            and not any(part.startswith("_") for part in p.relative_to(SRC).parts)
        )
        for p in files:
            rel = p.relative_to(SRC).as_posix()
            extra = meta.get(rel, {})
            try:
                entry, written = process(p, group, force, extra, meta_mtime)
            except Exception as exc:
                print(f"  ! {rel}: {exc}")
                continue
            produced.update(written)
            count += 1
            print(f"  {rel} -> {entry['src']} ({entry['w']}x{entry['h']})")

            entry["id"] = slug(Path(rel).with_suffix("").as_posix().replace("/", "-"))
            for key in ("title", "place", "alt", "featured"):
                if key in extra:
                    entry[key] = extra[key]

            if group == "galerie":
                cat = p.relative_to(base).parts[0] if len(p.relative_to(base).parts) > 1 else "ostatni"
                entry["category"] = cat
                if cat not in [c["id"] for c in data["categories"]]:
                    label = cat_labels.get(cat, {"cs": cat.capitalize(), "en": cat.capitalize()})
                    data["categories"].append({"id": cat, "label": label})
                data["gallery"].append(entry)
            else:
                data[group].append(entry)

    order = list(cat_labels)
    data["categories"].sort(key=lambda c: order.index(c["id"]) if c["id"] in order else len(order))
    data["gallery"].sort(key=lambda e: e.get("date", ""), reverse=True)

    removed = 0
    if OUT.is_dir():
        for old in OUT.rglob("*.webp"):
            if old not in produced:
                old.unlink()
                removed += 1

    DATA_JS.parent.mkdir(parents=True, exist_ok=True)
    DATA_JS.write_text(
        "// Generováno skriptem tools/optimize-images.py – needitovat ručně.\n"
        "const FOTKY = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print(f"\nHotovo: {count} fotek, {len(data['gallery'])} v galerii, smazáno starých souborů: {removed}.")
    print(f"Data: {DATA_JS.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
