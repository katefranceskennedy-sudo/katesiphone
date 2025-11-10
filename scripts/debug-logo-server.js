const fs = require('fs');
const path = require('path');
const http = require('http');

const publicPath = path.resolve(__dirname, '..', 'public', 'logo.png');
console.log('Checking file on disk:', publicPath);
try {
  const st = fs.statSync(publicPath);
  console.log('File exists. size:', st.size, 'bytes');
} catch (e) {
  console.error('File not found on disk:', e.message);
}

const urls = ['http://localhost:3000/logo.png', 'http://localhost:3000/logo.svg'];
for (const url of urls) {
  console.log('Requesting:', url);
  const req = http.get(url, (res) => {
    console.log(url, 'HTTP status:', res.statusCode);
    let size = 0;
    res.on('data', (c) => (size += c.length));
    res.on('end', () => console.log(url, 'Downloaded bytes:', size));
  });
  req.on('error', (err) => console.error(url, 'HTTP error:', err.message));
  req.setTimeout(5000, () => { console.error(url, 'HTTP timeout'); req.abort(); });
  req.on('error', (err) => {
    console.error(url, 'HTTP error (full):', err.stack || err.message);
  });
}
