// ---------------------------------------------------------------------------
// Demo NodeJS Server - Hello World (PLAIN) Response
// -------------------------------------------------
//
// File: demo-app1.js
//
// V1 Oct'2021 dbe - initial version
//
// Source: Node.js Web Development - Fifth Edition (packt.com)
// ---------------------------------------------------------------------------
// required packages
import * as http from 'http';

const server = http.createServer();

server.on('request', (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, World!\n');
});

server.listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080');