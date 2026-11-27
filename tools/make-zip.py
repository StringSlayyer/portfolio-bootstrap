"""Vytvoří ZIP k odevzdání: portfolio-odevzdani.zip v kořeni projektu.

Spuštění z kořene projektu:  python tools/make-zip.py
"""
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "portfolio-odevzdani.zip"

EXCLUDE_DIRS = {".git", ".claude", "_originals", "__pycache__", ".vs", ".vscode"}
EXCLUDE_FILES = {"CLAUDE.md", "POZNAMKY-PREZENTACE.md", "NAVOD.md", OUT.name}

count = 0
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as zf:
    for path in sorted(ROOT.rglob("*")):
        rel = path.relative_to(ROOT)
        if any(part in EXCLUDE_DIRS for part in rel.parts) or path.name in EXCLUDE_FILES or path.suffix == ".zip":
            continue
        if path.is_file():
            zf.write(path, Path("portfolio") / rel)
            count += 1

print(f"Hotovo: {OUT.name} ({count} souborů, {OUT.stat().st_size / 1024 / 1024:.1f} MB)")
