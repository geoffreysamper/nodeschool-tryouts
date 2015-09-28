var mymodule = require('./mymodule');

var dirPath = process.argv[2];
var filter = process.argv[3];



mymodule(dirPath,filter,function (err, data) {
		for (var f of data) {
			console.log(f);

		}
	});