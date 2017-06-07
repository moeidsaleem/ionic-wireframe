

app.controller('profileCtrl', function ($scope,$rootScope,$state,$firebaseArray,$firebaseObject,$firebaseAuth,sessionService) {

   //so we need to add login and register

   var vm = this;
    vm.sessionService = sessionService;
  var auth = $firebaseAuth();

  const db   = firebase.database().ref();
 const users = db.child('users');
 const date = new Date();
 $scope.cred = {};


// User profile
 var userRef = db.child('users').child($rootScope.uid);
  var syncObject = $firebaseObject(userRef);
  syncObject.$bindTo($rootScope, "user");

  //credit card logic
  var cardsRef =userRef.child('cards');
  $scope.creditCards = $firebaseArray(cardsRef);

//adding new creditcard
$scope.addCard = function(){
  cardsRef.child($scope.cred.cardNumber).set({
    cardNumber:$scope.cred.cardNumber,
    cardName:$scope.cred.cardName,
    cardExp:$scope.cred.cardExp,
    cardCvv:$scope.cred.cardCvv
  });
  $state.go('creditcard');
  $scope.cred = {};
}

var userx = firebase.auth().currentUser;


$scope.emailChange = function(newEmail){

userx.updateEmail(newEmail).then(function() {
  // Update successful.
}, function(error) {
  // An error happened.
  console.log('error')
});
}

// Change password.
$scope.changePassword = function(oldPass, newPass, confirmPass){
  if(newPass == confirmPass){
      userx.updatePassword(confirmPass).then(function() {
  // Update successful.
  userRef.child('password').set(confirmPass);
      $state.go('setting');
}, function(error) {
  // An error happened.
      $state.go('password');

});


}else{
  $state.go('password');
}

}









			



  
			
});