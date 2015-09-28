"use strict"

var http = require('http');
var fs = require('fs');

var port  = process.argv[2];
var filepath = process.argv[3];
var callback = function (req, resp){
	resp.writeHead(200, { 'content-type': 'text/plain' })
	fs.createReadStream(filepath).pipe(resp);		
}



var server = http.createServer(callback);

server.listen(port);