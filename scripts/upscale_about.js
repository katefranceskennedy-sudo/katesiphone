const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'public', 'about.png');
const output = path.join(__dirname, '..', 'public', 'about-up.png');
const targetWidth = 1400;

if (!fs.existsSync(input)) {
  console.error('Input file not found:', input);
  process.exit(1);
}

sharp(input)
  .metadata()
  .then(meta => {
    console.log('Original size:', meta.width, 'x', meta.height);
    return sharp(input)
      .resize({ width: targetWidth })
      .toFile(output);
  })
  .then(info => {
    console.log('Wrote:', output, 'size:', info.width, 'x', info.height);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
