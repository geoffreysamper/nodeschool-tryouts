var http  = require('http');
var through   = require('through2');
var concat = require('concat-stream');


var converterCallback =  function(buffer, encoding, next){
	this.push(buffer.toString().toUpperCase());
	next();
}

var toUpperCaseStream = through(converterCallback, (done) => done() );

var callback = function(req, res){
	req.pipe(toUpperCaseStream).pipe(res);	
}

var server =http.createServer(callback);



server.listen(Number(process.argv[2]));