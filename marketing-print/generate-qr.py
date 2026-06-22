#!/usr/bin/env python3
from html import escape
from pathlib import Path
import sys

from reportlab.graphics.barcode import qr


def qr_svg(value: str) -> str:
    widget = qr.QrCodeWidget(value, barLevel="M")
    code = widget.qr
    code.make()

    module_count = code.getModuleCount()
    quiet_zone = 4
    view_size = module_count + quiet_zone * 2
    paths = []

    for row in range(module_count):
        for col in range(module_count):
            if code.isDark(row, col):
                x = col + quiet_zone
                y = row + quiet_zone
                paths.append(f"M{x} {y}h1v1H{x}z")

    path_data = " ".join(paths)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {view_size} {view_size}" role="img" aria-label="Code QR">
  <title>{escape(value)}</title>
  <rect width="{view_size}" height="{view_size}" fill="#fff"/>
  <path d="{path_data}" fill="#202124"/>
</svg>
"""


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: generate-qr.py <value> <output.svg>", file=sys.stderr)
        return 2

    value = sys.argv[1]
    output = Path(sys.argv[2])
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(qr_svg(value), encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
