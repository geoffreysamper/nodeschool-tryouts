module.exports = function (dirPath, filter, callback) {
	

	var fs = require('fs');


	fs.readdir(dirPath, function (err, data) {
		
		if (err){
			callback(err);
			return;
		}
		
		var dotFilter = "." + filter;
		var result = [];
		for (var f of data) {
			if (f.endsWith(dotFilter)) {
				result.push(f);
			}
		}
		
		callback(null, result);
				
		});
}




