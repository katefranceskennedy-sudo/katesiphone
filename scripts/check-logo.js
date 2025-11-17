const http = require('http');
const url = 'http://localhost:3000/logo.png';
http.get(url, (res) => {
  console.log('status', res.statusCode);
  let size = 0;
  res.on('data', (c) => size += c.length);
  res.on('end', () => console.log('size', size));
}).on('error', (err) => {
  console.error('err', err.message);
});
