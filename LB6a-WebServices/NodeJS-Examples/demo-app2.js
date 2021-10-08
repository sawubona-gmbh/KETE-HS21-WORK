// ---------------------------------------------------------------------------
// Demo NodeJS Server - Hello World (HTML) Response
// ------------------------------------------------
// Note: Specify >>> 'Content-Type': 'text/html' <<<
//
// File: demo-app2.js
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
  response.end(
        `<html><head><title>DEMO NodeJS App2</title></head>
        <body><h1>DEMO NodeJS App2 - Hello World HTML Response</h1>
		<p>Hello World!</a></p>
        </body></html>`);
});

server.listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080');