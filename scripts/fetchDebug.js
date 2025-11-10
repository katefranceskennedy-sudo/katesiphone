const http = require('http');
const url = 'http://localhost:3000/api/debug';
http.get(url, (res) => {
  let body = '';
  res.setEncoding('utf8');
  res.on('data', c => body += c);
  res.on('end', () => {
    console.log('status', res.statusCode);
    try {
      console.log('body', JSON.parse(body));
    } catch (e) {
      console.log('body (raw)', body);
    }
  });
}).on('error', e => console.error('err', e.message));
