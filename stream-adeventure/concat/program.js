var concat = require('concat-stream');

var callback = function(text){
	var s=text.toString();
	for(var i = s.length -1; i >=0; i --  ){
		process.stdout.write(s[i]);
		
	}
}

process.stdin.pipe(concat(callback))
