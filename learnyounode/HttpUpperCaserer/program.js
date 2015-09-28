"use strict"

var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var port  = process.argv[2];

var callback = function (req, resp){

	var mapCallback = function(chunk){
		return chunk.toString().toUpperCase();
	}



	if (req.method === 'POST'){
		req.pipe(map(mapCallback)).pipe(resp);
	}






}



var server = http.createServer(callback);

server.listen(port);