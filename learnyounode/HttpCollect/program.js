
var url = process.argv[2]
var http= require('http');
var bl = require('bl');


var getCallback  = function(response){
	response.pipe(bl((e,d) =>{
		console.log( d.toString().length)
		console.log(d.toString());
		
		}
		
		
		
	));
	
	
}




http.get(url,getCallback).on('error', function(e) {
  console.log("Got error: " + e.message);
});