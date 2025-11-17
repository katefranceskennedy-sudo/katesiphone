// Upscale and lightly sharpen a PNG logo using Jimp.
// Usage:
// 1. Install dependency: `npm install jimp`
// 2. Run: `node scripts/upsample-logo.js [scale]`
//    e.g. `node scripts/upsample-logo.js 3` to upscale 3x (default is 3)

const path = require('path');

(async function main() {
  try {
    // dynamic import to support different jimp export shapes
    const jimpModule = await import('jimp');
    const Jimp = jimpModule.default ?? jimpModule.Jimp ?? jimpModule;

    const scale = process.argv[2] ? Math.max(1, parseFloat(process.argv[2])) : 3;
    const input = path.join(__dirname, '..', 'public', 'logo1.png');
    const img = await Jimp.read(input);

    const targetWidth = Math.round(img.bitmap.width * scale);
    const targetHeight = Math.round(img.bitmap.height * scale);
    console.log(`Input: ${input}`);
    console.log(`Original: ${img.bitmap.width}x${img.bitmap.height}, upscaling ${scale}x -> ${targetWidth}px width`);

    // use `scale` API to uniformly scale by factor (current jimp expects object-style args)
    img.scale(scale);

    // Light sharpen kernel (keeps edges crisp without heavy artifacts)
    const sharpenKernel = [
      [0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0]
    ];
    if (typeof img.convolute === 'function') {
      img.convolute(sharpenKernel);
    }

    const outName = `logo1_upscaled_${scale}x.png`;
    const outPath = path.join(__dirname, '..', 'public', outName);
    await img.write(outPath);
    console.log('Wrote upscaled file ->', outPath);
    console.log('Done. Inspect the output and replace `public/logo1.png` if you prefer the new one.');
  } catch (err) {
    console.error('Error upscaling logo:', err);
    process.exitCode = 2;
  }
})();
