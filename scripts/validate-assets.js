const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '..', 'public');
// logo and gif are required; poster is optional but recommended
const required = ['logo.png', 'jackets.gif'];
// Accept either jpg or svg poster filename
const optional = ['jacket-countdown-poster.jpg', 'jacket-countdown-poster.svg'];

let missingRequired = [];
for (const f of required) {
  if (!fs.existsSync(path.join(publicDir, f))) missingRequired.push(f);
}

let missingOptional = [];
for (const f of optional) {
  if (!fs.existsSync(path.join(publicDir, f))) missingOptional.push(f);
}

if (missingRequired.length) {
  console.error('Missing required public assets:', missingRequired.join(', '));
  process.exitCode = 2;
} else {
  console.log('All required public assets found.');
  if (missingOptional.length) {
    console.warn('Optional public assets not found (this is ok):', missingOptional.join(', '));
  }
}
