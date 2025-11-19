const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const dirs = [
  path.join(__dirname, '..', 'public', 'emoji'),
  path.join(__dirname, '..', 'public', 'topemojis'),
];

async function upscaleFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  if (filePath.includes('@2x') || filePath.includes('@3x') || filePath.endsWith('.webp')) return;

  try {
    const img = sharp(filePath, { animated: false });
    const meta = await img.metadata();
    if (!meta || !meta.width) {
      console.log('Skipping (no width):', filePath);
      return;
    }
    const scales = [2, 3];
    for (const s of scales) {
      const newWidth = Math.round(meta.width * s);
      const outPath = filePath.replace(ext, `@${s}x${ext}`);
      await img.resize({ width: newWidth }).toFile(outPath);
      console.log('Wrote', outPath);

      // also write WebP variant for each scale
      const webpOut = outPath.replace(/\.[a-z]+$/i, '.webp');
      await img.resize({ width: newWidth }).toFormat('webp').toFile(webpOut);
      console.log('Wrote', webpOut);
    }
  } catch (err) {
    console.error('Error processing', filePath, err.message);
  }
}

async function processDir(dir) {
  try {
    const items = await fs.readdir(dir);
    for (const name of items) {
      const full = path.join(dir, name);
      const stat = await fs.stat(full);
      if (stat.isFile()) {
        await upscaleFile(full);
      }
    }
  } catch (err) {
    console.error('Dir error', dir, err.message);
  }
}

(async function main(){
  for (const d of dirs) {
    console.log('Processing', d);
    await processDir(d);
  }
  console.log('Done');
})();
