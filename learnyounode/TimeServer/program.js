"use strict"

var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];
var callback = function (socket){
	
	var s=  strftime("%Y-%m-%d %H:%M\n", new Date());
	socket.end(s);
		
}



var server = net.createServer(callback);

server.listen(port);