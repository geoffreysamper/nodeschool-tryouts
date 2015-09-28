
"use strict"

var http = require('http');
var fs = require('fs');
var port  = process.argv[2];
var urlParser = require("url");


var callback = function (req, resp){
var url = urlParser.parse( req.url,true);


resp.writeHead(200, {'Content-Type': 'application/json'});

var pathname = url.pathname;

var isoDate = url.query.iso;
var d = new Date(isoDate);
if (pathname === "/api/parsetime"){
	let o = {hour : d.getHours(), minute : d.getMinutes(), second :d.getSeconds() }
	
	resp.write(JSON.stringify(o));
	
	
}

else if (pathname === '/api/unixtime')
{
	let o  = {unixtime : d.getTime()}
	resp.write(JSON.stringify(o));
	
	
}

resp.end();










}



var server = http.createServer(callback);

server.listen(port);