const http = require('http');
http.get('http://localhost:3000/logo.png', (res) => {
  console.log('status', res.statusCode);
  console.log('type', res.headers['content-type']);
  let n = 0;
  res.on('data', (b) => (n += b.length));
  res.on('end', () => console.log('length', n));
}).on('error', (e) => console.error('err', e.message));
