const http = require('http');
http.get('http://localhost:3000/', (res) => {
  console.log('status', res.statusCode);
  let body = '';
  res.setEncoding('utf8');
  res.on('data', (c) => (body += c));
  res.on('end', () => {
    console.log('body-length', body.length);
    console.log('contains logo1.png?', body.includes('logo1.png'));
    console.log('contains jackets.gif?', body.includes('jackets.gif'));
  });
}).on('error', (e) => console.error('err', e.message));
