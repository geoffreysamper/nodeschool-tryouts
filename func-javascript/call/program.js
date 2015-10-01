function duckCount(){
	
	return Array.prototype.filter.call( arguments, function (el){
		console.log(JSON.stringify(el) + "   " +typeof el );
	return Object.prototype.hasOwnProperty.call(el, 'quack');
	//	return el.hasOwnProperty('quack');
		
	}).length
};
module.exports = duckCount;