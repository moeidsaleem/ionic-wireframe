

app.controller('AuthCtrl', function ($scope,$rootScope,$state,$firebaseAuth,sessionService) {

   //so we need to add login and register

   var vm = this;
    vm.sessionService = sessionService;
   $scope.reg = {};
 var auth = $firebaseAuth();

  const db   = firebase.database().ref();
 const users = db.child('users');
 const fireDb = db.child('fireData'); 
 const date = new Date();
			

    $scope.login = function(email,pass){
    	auth.$signInWithEmailAndPassword(email, pass).then(function(firebaseUser){
	         	console.log("Signed in as:", firebaseUser.uid);
				 $rootScope.uid = firebaseUser.uid;
				 $state.go('mainscreen');

				 let lastLoginRef = users.child(firebaseUser.uid).child('last_login');
				//  users.child($rootScope.uid).child('last_login').set(date.toLocaleTimeString);
				// we can also chain the two calls together
				lastLoginRef.push().set({
				timing: date.toLocaleTimeString(),
				CurrentDate:date.toLocaleDateString()
				});

				// Now making a session with localStorage - When login run a session
				sessionService.startSession('email', email);
				sessionService.startSession('password', pass );
				sessionService.startSession('uid', firebaseUser.uid);

	            	}).catch(function(error) {
	                	console.error("Authentication failed:", error);
                            $rootScope.authErr = "Error : "+error;

               });

    }


    	  // logout 
 function logout(){
	   console.log('you have logged out');
	   $rootScope.uid = null;
	   $rootScope.email = '';
	    $rootScope.password = '';
  // end All sessions 
	   sessionService.endAllSessions(); /* data is cleared. */

	 $state.go('login', {}, {reload: true}).then(function(){
            console.log('cleared');
      });

	 
   }


   	 //   THIS IS SIGN UP 
			$scope.signup = function(email, pass){
			 auth.$createUserWithEmailAndPassword(email, pass).then(
    		function(firebaseUser){
            // logic after sign up 
            console.log( "user signed up with following email" + firebaseUser.email + firebaseUser.uid);
                $rootScope.uid = firebaseUser.uid;
                $rootScope.email = email;
                $rootScope.password = pass;
              
               console.log($rootScope.uid +' email: ' +email +'password: '+ pass)

				// Now making a session with localStorage - When login run a session
				sessionService.startSession('email', email);
				sessionService.startSession('password', pass );
				sessionService.startSession('uid', firebaseUser.uid);
				
        //database work
         users.child($rootScope.uid).set({  /*create new user*/
                name:$scope.reg.name,
                password:$scope.reg.password,
                email:$scope.reg.email,
                uniqueId:$rootScope.uid,
                phone:$scope.reg.phone
               });
         //credit card info
         //credit card logic
           users.child($rootScope.uid).child('cards').child($scope.reg.cardNumber).set({
            cardNumber:$scope.reg.cardNumber,
            cardName:$scope.reg.cardName,
            cardCvv:$scope.reg.cardCvv,
            cardExp:$scope.reg.cardExp
           });



                $state.go('setting');
    	}).catch(function(error){
    		// error handling
    		$rootScope.authErr = "Error : "+error;
    		
    	});

			}
			
});