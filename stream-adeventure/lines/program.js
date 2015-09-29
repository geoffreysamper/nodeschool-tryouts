var through  = require('through2');
var split  = require('split');
var linenumber = 0;
var writeCallback = function(buffer,encoding, next){
	var result = buffer.toString();
	if (linenumber % 2 === 0){
		result = result.toLowerCase();
		
	}
	else {
		result = result.toUpperCase();
		
	}
	
	this.push(result);
	this.push('\n');
	linenumber ++;
	
	next();
}

var endCallback = (done) =>done();

var stream = through(writeCallback, endCallback);

process.stdin.pipe(split())
.pipe(stream)
.pipe(process.stdout)