# Sagesse Numérique Print Assets

This folder contains editable source files and rendered print outputs for a business card and flyer.

## Files

- `business-card.html`: two-sided business card source, sized at 3.75 in x 2.25 in including 0.125 in bleed.
- `flyer.html`: one-page Letter flyer source.
- `styles.css`: shared print styling.
- `generate-qr.py`: local QR generator for `https://sagessenumerique.ca/#contact`.
- `export-assets.mjs`: renders PDFs and PNG previews into `dist/`.

## Export

Run from the repository root:

```sh
NODE_PATH=/Users/philtrem/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules \
/Users/philtrem/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node \
marketing-print/export-assets.mjs
```

Outputs:

- `dist/sagesse-numerique-business-card.pdf`
- `dist/sagesse-numerique-flyer.pdf`
- `dist/business-card-front.png`
- `dist/business-card-back.png`
- `dist/flyer.png`
