const net = require('net');
const s = net.createConnection({host:'127.0.0.1', port:3000}, () => { console.log('OPEN'); s.end(); process.exit(0); });
s.on('error', () => { console.log('CLOSED'); process.exit(1); });
setTimeout(()=>{ console.log('TIMEOUT'); process.exit(2); }, 3000);
