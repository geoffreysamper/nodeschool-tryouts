
var url = process.argv[2]

var http= require('http');

var callback  = function(response){
	response.on('data', function (data){
	console.log(data);
	
	
});

	
}



http.get("http://www.google.com/index.html",callback).on('error', function(e) {
  console.log("Got error: " + e.message);
});