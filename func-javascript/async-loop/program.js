//could not run it
function loadUsers(userIds, load, done) {
    var users = [];
    var loadCounter = 0;
    userIds.forEach(function (id, index, array){
        var asyncCallback =  function(){
            let user  = load(id);
            users[index] = user;
            
            loadCounter ++;
           
            if (loadCounter == array.length -1){
                done(users);
            }
            
        } 
        setTimeout(asyncCallback, 0);
     });
}

module.exports = loadUsers
