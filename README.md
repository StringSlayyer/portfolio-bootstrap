# Portfolio – Samuel Žárský

Semestrální projekt do předmětu Responzivní webové stránky. Osobní portfolio vývojáře, hudebníka a fotografa.

**Web:** viz `url.txt`

## Technologie

- HTML5, Bootstrap 5.3, Bootstrap Icons, vlastní CSS a vanilla JS, bez buildu
- DataTables 2 pro Bootstrap 5 (+ Responsive), Google Fonts (Instrument Serif, Inter)
- Knihovny se načítají z CDN. Data a překlady jsou v `.js` souborech, takže web funguje i po otevření `index.html` přímo ze složky (file://).

## Struktura

| Soubor / složka | Obsah |
|---|---|
| `index.html` … `kontakt.html` | 6 stránek webu |
| `assets/css/style.css` | barvy, motivy, layout, komponenty |
| `assets/js/main.js` | motiv, animace, galerie + modal, DataTables, projekty, formulář |
| `assets/js/i18n.js` | slovník CZ / EN a přepínání jazyka |
| `assets/js/data-fotky.js` | seznam fotek s EXIF (generuje skript) |
| `assets/js/data-projekty.js` | texty projektů CZ / EN |
| `assets/js/data-repertoar.js` | repertoár pro tabulku na stránce Hudba |
| `assets/img/` | optimalizované WebP fotky (generuje skript) |
| `tools/optimize-images.py` | zmenšení fotek a vygenerování `data-fotky.js` |
| `tools/fotky-popisky.json` | názvy fotek (CZ / EN), výběr na homepage, názvy kategorií |
| `tools/make-zip.py` | ZIP k odevzdání |
| `docs/wireframe/` | wireframe homepage |

## Fotky

Originály patří do `_originals/` (nejde na GitHub ani do ZIPu):

```
_originals/carousel/          fotky do carouselu (2000 px)
_originals/portret/           portrét (800 px)
_originals/projekty/          obrázky projektů (1600 px + náhled)
_originals/galerie/<kategorie>/   galerie (1600 px + náhled 600 px)
_originals/_k-vyberu/         neroztříděné, skript je přeskočí
```

Nová podsložka v `galerie/` = nová kategorie a nové filtrovací tlačítko. Český a anglický název kategorie a fotek se nastavuje v `tools/fotky-popisky.json`. U fotky lze doplnit i `"place": {"cs": "…", "en": "…"}`, které se pak zobrazí v modalu.

Průhledné okraje (např. u panoramat složených z více fotek) skript ořízne automaticky. Ruční ořez nastavíte v `fotky-popisky.json` jako `"crop": [vlevo, nahoře, vpravo, dole]`, tedy podíl, který se odřízne z každé strany. Například `[0, 0.1, 0, 0]` odřízne horních 10 %.

**Jednorázová instalace Pillow:**

```
python -m pip install Pillow
```

**Spuštění (z kořene projektu):**

```
python tools/optimize-images.py
```

Skript zpracuje jen nové nebo změněné fotky (`--force` přegeneruje vše) a smaže WebP soubory, ke kterým už originál neexistuje. Soubory `.CR2` ignoruje. Výstupní WebP neobsahují EXIF ani GPS.

## Nasazení na GitHub Pages (GitHub Desktop)

1. V GitHub Desktop otevřete repozitář (File → Add local repository → složka `portfolio`).
2. Vlevo zkontrolujte změněné soubory. Nesmí tam být `_originals/`, `CLAUDE.md` ani `POZNAMKY-PREZENTACE.md`, ty jsou v `.gitignore`.
3. Dole vyplňte popis commitu → **Commit to main** → nahoře **Push origin**.
4. Na github.com otevřete repozitář → **Settings** → **Pages**.
5. *Source*: **Deploy from a branch**, *Branch*: **main**, složka **/ (root)** → **Save**.
6. Po 1–2 minutách se nahoře v Settings → Pages objeví adresa webu. Ověřte, že sedí s `url.txt` (`https://stringslayyer.github.io/portfolio-bootstrap/`), případně ji v souboru opravte.

## ZIP k odevzdání

```
python tools/make-zip.py
```

Vytvoří `portfolio-odevzdani.zip` v kořeni projektu (bez `_originals/`, `.git/`, `.claude/`, `__pycache__`, `CLAUDE.md` a `POZNAMKY-PREZENTACE.md`).

Bez Pythonu: zkopírujte složku projektu, smažte z kopie `_originals`, `.git`, `.claude` (skryté složky zobrazíte v Průzkumníku přes Zobrazit → Zobrazit → Skryté položky), pak pravým tlačítkem → Komprimovat do souboru ZIP.
