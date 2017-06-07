

app.controller('mainCtrl', function ($scope,$rootScope,$state,$firebaseObject,$firebaseAuth,sessionService) {

   //so we need to add login and register

   var vm = this;
    vm.sessionService = sessionService;
  var auth = $firebaseAuth();

  const db   = firebase.database().ref();
 const users = db.child('users');
 const date = new Date();


// User profile
 var userRef = db.child('users').child($rootScope.uid);
  var syncObject = $firebaseObject(userRef);
  syncObject.$bindTo($rootScope, "user");


  //Restaurants
    var resRef = db.child('restaurants');
  $scope.restaurant = $firebaseArray(resRef);







			



  
			
});