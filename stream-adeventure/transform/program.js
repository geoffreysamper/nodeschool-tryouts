var through  = require('through2');


var writeCallback = function(buffer, encoding,next){
	this.push(buffer.toString().toUpperCase());
	next();
} 
var endCallback  = (done) =>done();


var stream = through(writeCallback, endCallback);

process.stdin.pipe(stream).pipe(process.stdout);
