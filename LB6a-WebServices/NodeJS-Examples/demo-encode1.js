// ---------------------------------------------------------------------------
// Demo NodeJS Server - String ENCODING Service
// --------------------------------------------
// Usage http://127.0.0.1:7777?encode="xxx" where xxx is the string to encode
//
// Note: delete/deactivate <"type": "module"> in the package.json config file
//
// File: demo-encode1.js
//
// V1 Oct'2021 dbe - initial version, KETE-HS21, based on fibonacci.js example
//
// Source: Node.js Web Development - Fifth Edition (packt.com)
// ---------------------------------------------------------------------------
// required packages
var http = require('http');
var url  = require('url');

// local functions, objects
const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

// To create a (symmetric) cipher and decypher define a key string
const myCipher = cipher('mySecretKey2021')

//Then define the ENCRYPTION function to cipher a string
const encryption = exports.encryption = function(str) {
    return myCipher(str);
}

// ------------------------------------------------------------------------------
// Setup a http server acting on the 'encode' request parameter
// Usage http://127.0.0.1:7777?encode="xxx" where xxx is the string to encode
// ------------------------------------------------------------------------------
http.createServer(function (request, response) {
  var urlP = url.parse(request.url, true);
  var xEncode;
    
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  if (urlP.query['encode']) {
    xEncode = encryption(urlP.query['encode']);
    response.end('Encoded String '+ urlP.query['encode'] +' = '+ xEncode);
  } else {
	response.end('USAGE: http://127.0.0.1:7777?encode=xxx where xxx is the string to encode');
  }
}).listen(7777, '127.0.0.1');
console.log('Server running at http://127.0.0.1:7777');
