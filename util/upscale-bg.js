const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function upscale() {
  const src = path.join(__dirname, '..', 'public', 'bg-chat-image.png');
  const out = path.join(__dirname, '..', 'public', 'bg-chat-image@2x.png');
  if (!fs.existsSync(src)) {
    console.error('Source image not found:', src);
    process.exit(1);
  }

  try {
    const image = sharp(src);
    const metadata = await image.metadata();
    const targetWidth = Math.max(1200, (metadata.width || 100) * 4);

    await image
      .resize({ width: targetWidth, kernel: sharp.kernel.lanczos3 })
      .toFile(out);

    console.log('Upscaled image written to', out);
  } catch (err) {
    console.error('Error upscaling image:', err);
    process.exit(1);
  }
}

upscale();
