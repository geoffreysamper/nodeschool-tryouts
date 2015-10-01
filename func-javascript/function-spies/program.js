    function Spy(target, method) {
		var oldfn = target[method];
		
		var result = {count :0};
		
		
		target[method] = function(){
		result.count ++;
		
		return oldfn.apply(this, arguments );
		
	}
		
	return result;
		
    }
    
    module.exports = Spy

