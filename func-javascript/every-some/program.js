 function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
		return submittedUsers.every( function (u, i, array) {  
			return goodUsers.some( (su, i, array) => u.id === su.id )
		} );

      };
    }
    
    module.exports = checkUsersValid
