#!/usr/bin/env node
/*
 Image optimizer script
 Usage:
  node ./scripts/optimize-images.js --src public --out public/_optimized [--dry]

 This script scans the source directory, finds .jpg/.jpeg/.png files and
 generates resized WebP and AVIF versions at several widths. It skips GIFs
 (to avoid mangling animations) and copies SVGs as-is.

 Outputs preserve directory structure under the output directory.
*/

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { src: "public", out: "public/_optimized", dry: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--src") out.src = args[++i];
    else if (a === "--out") out.out = args[++i];
    else if (a === "--dry") out.dry = true;
  }
  return out;
}

const { src, out, dry } = parseArgs();
const allowedRaster = [".jpg", ".jpeg", ".png"]; // We'll convert these
const skipExt = [".gif"]; // skip animated gifs
const copyExt = [".svg", ".webp", ".avif"]; // copy through
const sizes = [320, 640, 1024, 1600];

async function walk(dir) {
  let results = [];
  const list = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const ent of list) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      results = results.concat(await walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  return fs.promises.mkdir(dir, { recursive: true });
}

async function processFile(file) {
  const rel = path.relative(src, file);
  const ext = path.extname(file).toLowerCase();

  if (skipExt.includes(ext)) {
    console.log(`skip (gif): ${rel}`);
    return;
  }

  if (copyExt.includes(ext)) {
    const outPath = path.join(out, rel);
    console.log(`${dry ? '[dry] copy' : 'copy'}: ${rel} -> ${path.relative('.', outPath)}`);
    if (!dry) {
      await ensureDir(outPath);
      await fs.promises.copyFile(file, outPath);
    }
    return;
  }

  if (!allowedRaster.includes(ext)) {
    // Unhandled type
    console.log(`skip (unsupported): ${rel}`);
    return;
  }

  try {
    const img = sharp(file, { failOnError: false });
    const meta = await img.metadata();
    const origWidth = meta.width || null;

    const targetSizes = sizes.filter(w => !origWidth || w < origWidth).concat(origWidth || []);
    // Deduplicate and sort
    const uniq = Array.from(new Set(targetSizes)).sort((a, b) => a - b);

    for (const w of uniq) {
      const suffix = w ? `-${w}` : "";
      const baseName = path.basename(file, ext) + suffix;
      const relDir = path.dirname(rel);
      const outDir = path.join(out, relDir);
      await ensureDir(path.join(outDir, "x")); // ensure dir exists

      const outWebP = path.join(outDir, baseName + ".webp");
      const outAvif = path.join(outDir, baseName + ".avif");

      console.log(`${dry ? '[dry] gen' : 'gen'}: ${rel} -> ${path.relative('.', outWebP)}, ${path.relative('.', outAvif)}`);
      if (!dry) {
        const pipeline = sharp(file, { failOnError: false }).resize(w || null).withMetadata();
        await pipeline.toFile(outWebP, { quality: 80 });
        await pipeline.toFile(outAvif, { quality: 50 });
      }
    }
  } catch (err) {
    console.error(`error processing ${rel}:`, err.message || err);
  }
}

async function main() {
  const absSrc = path.resolve(src);
  if (!fs.existsSync(absSrc)) {
    console.error(`source directory not found: ${absSrc}`);
    process.exit(1);
  }

  console.log(`Scanning ${absSrc} (dry=${dry})...`);
  const files = await walk(absSrc);
  const candidates = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return allowedRaster.includes(ext) || skipExt.includes(ext) || copyExt.includes(ext);
  });

  console.log(`Found ${candidates.length} image(s) to consider.`);

  for (const f of candidates) {
    // eslint-disable-next-line no-await-in-loop
    await processFile(f);
  }

  console.log("Done.");
}

main().catch(err => {
  console.error(err);
  process.exit(2);
});
