import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const outDir = resolve(__dirname, "dist");
const qrTarget = resolve(__dirname, "assets", "qr-contact.svg");
const contactUrl = "https://sagessenumerique.ca/#contact";

const runtimePython =
  process.env.CODEX_PYTHON ||
  "/Users/philtrem/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
].filter(Boolean);

function runQrGenerator() {
  const result = spawnSync(runtimePython, [
    resolve(__dirname, "generate-qr.py"),
    contactUrl,
    qrTarget,
  ], {
    encoding: "utf-8",
  });

  if (result.status !== 0) {
    throw new Error(`QR generation failed:\n${result.stderr || result.stdout}`);
  }
}

function chromeLaunchOptions() {
  const executablePath = chromeCandidates.find((candidate) => existsSync(candidate));
  return {
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  };
}

async function waitForAssets(page) {
  await page.evaluate(async () => {
    const imagePromises = Array.from(document.images).map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise((resolveImage, rejectImage) => {
        image.addEventListener("load", resolveImage, { once: true });
        image.addEventListener("error", rejectImage, { once: true });
      });
    });

    await Promise.all(imagePromises);
    if (document.fonts) {
      await document.fonts.ready;
    }
  });
}

async function renderPdf(browser, source, output) {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(resolve(__dirname, source)).href, { waitUntil: "networkidle" });
  await waitForAssets(page);
  await page.pdf({
    path: resolve(outDir, output),
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();
}

async function renderElementPng(browser, source, selector, output, viewport, scale = 2) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: scale,
  });
  const page = await context.newPage();
  await page.goto(pathToFileURL(resolve(__dirname, source)).href, { waitUntil: "networkidle" });
  await waitForAssets(page);
  await page.locator(selector).screenshot({
    path: resolve(outDir, output),
    animations: "disabled",
  });
  await context.close();
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  runQrGenerator();

  const browser = await chromium.launch(chromeLaunchOptions());
  try {
    await renderPdf(browser, "business-card.html", "sagesse-numerique-business-card.pdf");
    await renderPdf(browser, "flyer.html", "sagesse-numerique-flyer.pdf");
    await renderElementPng(
      browser,
      "business-card.html",
      ".card-front",
      "business-card-front.png",
      { width: 760, height: 520 },
      4,
    );
    await renderElementPng(
      browser,
      "business-card.html",
      ".card-back",
      "business-card-back.png",
      { width: 760, height: 520 },
      4,
    );
    await renderElementPng(
      browser,
      "flyer.html",
      ".flyer",
      "flyer.png",
      { width: 980, height: 1320 },
      2,
    );
  } finally {
    await browser.close();
  }

  console.log(`Wrote print assets to ${resolve(projectRoot, "marketing-print", "dist")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
