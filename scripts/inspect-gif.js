const fs = require('fs');
const p = 'public/leadlightmag.gif';
let buf;
try {
  buf = fs.readFileSync(p);
} catch (e) {
  console.error('ERROR reading file', p, e.message);
  process.exit(2);
}
function u8(i){return buf[i];}
const header = buf.toString('ascii',0,6);
console.log('Header:', header);
// Logical Screen Descriptor packed byte at offset 10 (0-based)
const packed = u8(10);
const gctFlag = !!(packed & 0x80);
const gctSizeEntries = gctFlag ? (2 ** ((packed & 0x07) + 1)) : 0;
const gctSizeBytes = gctSizeEntries * 3;
console.log('GCT flag:', gctFlag, 'entries:', gctSizeEntries, 'bytes:', gctSizeBytes);
const gctOffset = 13;
if (gctFlag) console.log('GCT offset (byte):', gctOffset);

// Find all Graphic Control Extensions
let gceInfo = [];
for (let i = 0; i < buf.length - 8; i++) {
  if (buf[i] === 0x21 && buf[i+1] === 0xF9 && buf[i+2] === 0x04) {
    const packed2 = buf[i+3];
    const delay = (buf[i+5] << 8) | buf[i+4];
    const transIndex = buf[i+6];
    const hasTransparent = !!(packed2 & 0x01);
    gceInfo.push({ offset: i, packed: packed2, delay, transIndex, hasTransparent });
  }
}
console.log('Found GCE count:', gceInfo.length);
if (gceInfo.length === 0) process.exit(0);

// Report details for first few
for (let k = 0; k < Math.min(5, gceInfo.length); k++) {
  const g = gceInfo[k];
  console.log(`#${k}: offset=${g.offset}, packed=0x${g.packed.toString(16)}, delay=${g.delay}, hasTransparent=${g.hasTransparent}, transIndex=${g.transIndex}`);
}

const first = gceInfo[0];
if (!first.hasTransparent) {
  console.log('First GCE has no transparency flag');
  process.exit(0);
}

if (!gctFlag) {
  console.log('No Global Color Table present - transparency index mapping may use local color table.');
  process.exit(0);
}

const ti = first.transIndex;
if (ti < 0 || ti >= gctSizeEntries) {
  console.log('Transparent index', ti, 'is outside GCT entries (', gctSizeEntries, ')');
  process.exit(0);
}
const rgb = [ buf[gctOffset + ti*3], buf[gctOffset + ti*3 + 1], buf[gctOffset + ti*3 + 2] ];
console.log('Transparent index', ti, 'maps to RGB', rgb);

// Also check first frame descriptor to see if it has a local color table and print a warning
let imgDescIndex = buf.indexOf(Buffer.from([0x2C])); // image separator
if (imgDescIndex !== -1) {
  console.log('First image descriptor at', imgDescIndex);
  const ldPacked = buf[imgDescIndex + 9];
  const lctFlag = !!(ldPacked & 0x80);
  const lctEntries = lctFlag ? (2 ** ((ldPacked & 0x07) + 1)) : 0;
  console.log('Local color table flag on first image:', lctFlag, 'entries:', lctEntries);
  if (lctFlag) {
    const lctOffset = imgDescIndex + 10;
    if (ti*3 + lctOffset < buf.length) {
      const rgbLocal = [ buf[lctOffset + ti*3], buf[lctOffset + ti*3 + 1], buf[lctOffset + ti*3 + 2] ];
      console.log('Transparent index maps to local RGB (first image):', rgbLocal);
    }
  }
}
