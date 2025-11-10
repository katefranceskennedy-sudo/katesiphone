const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'app', 'components', 'TopEmojisAnchor.tsx');
const s = fs.readFileSync(file, 'utf8');
const counts = {'(':0,')':0,'{':0,'}':0,'[':0,']':0};
for (const c of s) if (Object.prototype.hasOwnProperty.call(counts, c)) counts[c]++;
console.log('counts', counts);
console.log('length', s.length);

// show tail of file for inspection
console.log('--- file tail ---');
console.log(s.slice(-400));
