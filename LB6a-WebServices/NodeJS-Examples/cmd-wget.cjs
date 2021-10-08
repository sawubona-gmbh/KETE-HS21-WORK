// ---------------------------------------------------------------------------
// Demo NodeJS Command - CURL WGET Simulation
// --------------------------------------------
//
// File: demo-wget.cjs
//
// V1 Oct'2021 dbe - initial version
//
// Source: Node.js Web Development - Fifth Edition (packt.com)
// ---------------------------------------------------------------------------
// required packages
const http = require('http');
const url  = require('url');
const util = require('util');

const argUrl = process.argv[2];
const parsedUrl = url.parse(argUrl, true);

// The options object is passed to http.request telling it the URL to retrieve
const options = {
  host: parsedUrl.hostname,
  port: parsedUrl.port,
  path: parsedUrl.pathname,
  method: 'GET'
};

if (parsedUrl.search) options.path += "?"+parsedUrl.search;

const request = http.request(options);

// Invoked when the request is finished
request.on('response', response => {
  console.log('STATUS: ' + response.statusCode);
  console.log('HEADERS: ' + util.inspect(response.headers));
  response.setEncoding('utf8');
  response.on('data', chunk => { console.log('BODY: ' + chunk); });
  response.on('error', err => {  console.log('RESPONSE ERROR: ' + err); });
});

// Invoked on errors
request.on('error', err => { console.log('REQUEST ERROR: ' + err); });
request.end();
