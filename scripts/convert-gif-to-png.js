const fs = require('fs');
const getPixels = require('get-pixels');
const { PNG } = require('pngjs');

const inPath = 'public/leadlightmag.gif';
const outPath = 'public/leadlightmag_trimmed.png';
const backupPath = 'public/leadlightmag_backup.gif';

if (!fs.existsSync(inPath)) {
  console.error('Input GIF not found:', inPath);
  process.exit(1);
}

// Backup original if not already backed up
try {
  if (!fs.existsSync(backupPath)) fs.copyFileSync(inPath, backupPath);
} catch (e) {
  console.warn('Could not create backup:', e.message);
}

// tolerance: how close to white to consider transparent (0-255)
const TOL = 12; // ~5%

getPixels(inPath, function(err, pixels) {
  if (err) {
    console.error('Error reading pixels:', err.message);
    process.exit(2);
  }
  // pixels shape: [width, height, channels]
  const width = pixels.shape[0];
  const height = pixels.shape[1];
  const channels = pixels.shape[2];
  console.log('Dimensions:', width, 'x', height, 'channels:', channels);

  const png = new PNG({ width, height, filterType: -1 });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2; // RGBA idx for png.data
      const pxIdx = (y * width + x) * channels;
      const r = pixels.data[pxIdx + 0];
      const g = pixels.data[pxIdx + 1];
      const b = pixels.data[pxIdx + 2];
      let a = channels === 4 ? pixels.data[pxIdx + 3] : 255;

      // If pixel is almost white, make fully transparent
      if (r >= 255 - TOL && g >= 255 - TOL && b >= 255 - TOL) {
        a = 0;
      }

      png.data[idx] = r;
      png.data[idx+1] = g;
      png.data[idx+2] = b;
      png.data[idx+3] = a;
    }
  }

  const outStream = fs.createWriteStream(outPath);
  png.pack().pipe(outStream);
  outStream.on('finish', () => {
    console.log('Wrote trimmed PNG to', outPath);
  });
});
