// ---------------------------------------------------------------------------
// Demo NodeJS Server - OPERATING SYSTEM INFO
// incl. http sniffer services serverside
// ------------------------------------------ 
// File: demo-server2.js
//       httpsniffer.mjs (in subdirectory ./events)
//
// V1 Oct'2021 dbe - initial version, KETE-HS21
//
// Source: Node.js Web Development - Fifth Edition (packt.com)
// ---------------------------------------------------------------------------
import * as http from 'http';
import * as util from 'util';
import * as os from 'os';

// Import httpsniffer module script
import { sniffOn } from './events/httpsniffer.mjs'; 

const listenOn = 'http://localhost:8080';

const server = http.createServer();
server.on('request', (request, response) => {
    var requrl = new URL(request.url, listenOn);
    if (requrl.pathname === '/') homePage(request, response);
    else if (requrl.pathname === "/osinfo") osInfo(request, response);
    else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("bad URL "+ request.url);
    }
});

server.listen(new URL(listenOn).port);

// Activate http sniffer on current server
sniffOn(server);

console.log(`listening to ${listenOn}`);

function homePage(request, response) {
    response.end(
        `<html><head><title>DEMO NodeJS Server2</title></head>
        <body><h1>DEMO NodeJS Server2 - Operating System Info</h1>
		<h2>V1 Oct'2021 - KETE HS21 - Incl. httpsniffer on server</h2>
        <p><a href='/osinfo'>Get OS Info</a></p>
        </body></html>`);
}

function osInfo(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(
        `<html><head><title>DEMO NodeJS Server2 - Operating System Info</title></head>
        <body><h1>DEMO NodeJS Server2 - Operating System Info</h1>
		<table>
        <tr><th>TMP Dir</th><td>${os.tmpdir()}</td></tr>
        <tr><th>Host Name</th><td>${os.hostname()}</td></tr>
        <tr><th>OS Type</th><td>${os.type()} ${os.platform()} ${os.arch()} ${os.release()}</td></tr>
        <tr><th>Uptime</th><td>${os.uptime()} ${util.inspect(os.loadavg())}</td></tr>
        <tr><th>Memory</th><td>total: ${os.totalmem()} free: ${os.freemem()}</td></tr>
        <tr><th>CPU's</th><td><pre>${util.inspect(os.cpus())}</pre></td></tr>
        <tr><th>Network</th><td><pre>${util.inspect(os.networkInterfaces())}</pre></td></tr>
        </table>
        </body></html>`);
}