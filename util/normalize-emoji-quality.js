const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function getImageInfo(file) {
  try {
    return await sharp(file).metadata();
  } catch (err) {
    return null;
  }
}

async function normalize() {
  const dir = path.join(__dirname, '..', 'public', 'emoji');
  const names = ['radio.png', 'flop.png'];

  const files = (await fs.promises.readdir(dir)).filter(f => f.toLowerCase().endsWith('.png'));
  const originals = files.filter(f => !/@[23]x/.test(f));

  // gather sizes of all emoji originals
  const infos = [];
  for (const f of originals) {
    const p = path.join(dir, f);
    const info = await getImageInfo(p);
    if (info) infos.push({file: f, w: info.width, h: info.height});
  }

  if (infos.length === 0) {
    console.log('No PNG emoji files found');
    return;
  }

  // pick a target size: median of widths and heights to match typical emoji
  const widths = infos.map(i => i.w).sort((a,b)=>a-b);
  const heights = infos.map(i => i.h).sort((a,b)=>a-b);
  const median = arr => arr[Math.floor(arr.length/2)];
  const targetW = median(widths);
  const targetH = median(heights);

  console.log('Target size:', targetW, 'x', targetH);

  for (const name of names) {
    const src = path.join(dir, name);
    if (!fs.existsSync(src)) {
      console.log('Skipping missing', name);
      continue;
    }

    const info = await getImageInfo(src);
    if (!info) {
      console.log('Could not read', name);
      continue;
    }

    // if already large enough, just run a fitted export to normalize format/quality
    if (info.width >= targetW && info.height >= targetH) {
      console.log('Normalizing (no upscale) ->', name);
      await sharp(src)
        .resize(targetW, targetH, {fit: 'contain', background: {r:0,g:0,b:0,alpha:0}})
        .png({compressionLevel: 9, quality: 95})
        .toFile(path.join(dir, name + '.tmp'));
    } else {
      console.log('Upscaling ->', name, `from ${info.width}x${info.height} to ${targetW}x${targetH}`);
      await sharp(src)
        .resize(targetW, targetH, {fit: 'contain', kernel: 'lanczos3', background: {r:0,g:0,b:0,alpha:0}})
        .png({compressionLevel: 9, quality: 95})
        .toFile(path.join(dir, name + '.tmp'));
    }

    // replace original atomically
    await fs.promises.rename(path.join(dir, name + '.tmp'), src);
    console.log('Wrote normalized', name);
  }

  console.log('Done');
}

if (require.main === module) normalize().catch(err => { console.error(err); process.exit(1); });
