// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
 .filter('inArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
    };
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
   
});



angular.module('starter', ['ionic'])
.config( function ($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('signup', {
      url: "/signup",
      templateUrl: "signup.html",
      controller:'mainCtrl'
    })

    .state('register',{
      url:'/register',
      templateUrl:'register.html',
      controller:'mainCtrl'
    })
    .state('login',{
      url:'/login',
      templateUrl:'login.html',
      controller:'mainCtrl'

    })
    .state('booking',{
      url:'/booking',
      templateUrl:'booking.html',
      controller:'mainCtrl'

    })
    .state('setting',{
      url:'/setting',
      templateUrl:'setting.html',
      controller:'mainCtrl'

    })
     .state('social',{
      url:'/social',
      templateUrl:'social.html',
      controller:'mainCtrl'

    })
     .state('password',{
      url:'/password',
      templateUrl:'password.html',
      controller:'mainCtrl'

    })
      .state('reservations',{
      url:'/reservations',
      templateUrl:'reservations.html',
      controller:'mainCtrl'

    }) 
      .state('detail',{
      url:'/detail',
      templateUrl:'detail.html',
      controller:'mainCtrl'

    })
      .state('mainscreen',{
      url:'/mainscreen',
      templateUrl:'mainscreen.html',
      controller:'mainCtrl'

    })
      .state('home',{
      url:'/home',
      templateUrl:'logo.html',
      controller:'mainCtrl'
    })
     .state('creditcard',{
      url:'/creditcard',
      templateUrl:'creditcard.html',
      controller:'mainCtrl'
    }).state('newcard',{
      url:'/newcard',
      templateUrl:'newcard.html',
      controller:'mainCtrl'
    }).state('help',{
      url:'/help',
      templateUrl:'help.html',
      controller:'mainCtrl'
    });
    $urlRouterProvider.otherwise('/home');

})
.controller('mainCtrl',  function ($scope,$state,$ionicSideMenuDelegate,$rootScope,$ionicPopup,$ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
    $scope.toggleRight = function() {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.restaurant = [{
    name:'Ali baba resutauarant',
    city:'Rawalpindi',
    hours:'10:00am - 11:00pm',
    specific:'Asian Food',
    img:'https://foursquare.com/img/categories/food/default_256.png'
  },
  {
    name:'Subway',
    city:'Islamabad',
    hours:'08:00am - 11:30pm',
    specific:'fast food',
    img:'https://foursquare.com/img/categories/food/default_256.png'
  },
  {
    name:'Asian Pacific Bar',
    city:'Islamabad',
    hours:'10:00am - 11:00pm',
    specific:'Asian',
    img:'https://foursquare.com/img/categories/food/default_256.png'


  },
   {
    name:'Italino',
    city:'Islamabad',
    hours:'10:00am - 11:00pm',
    specific:'italian',
    img:'https://foursquare.com/img/categories/food/default_256.png'


  },
   {
    name:'Gero Burger',
    city:'Islamabad',
    hours:'01:00pm - 03:00am',
    specific:'burgers',
    img:'https://foursquare.com/img/categories/food/default_256.png'


  },
   {
    name:'Italino',
    city:'Islamabad',
    hours:'10:00am - 11:00pm',
    specific:'italian',
    img:'https://foursquare.com/img/categories/food/default_256.png'


  }];
      $scope.res = {
    name:'Ali baba resutauarant',
    city:'Rawalpindi',
    hours:'10:00am - 11:00pm',
    specific:'Asian Food',
    imgIco:'https://foursquare.com/img/categories/food/default_256.png',
    img:'img/res.jpg',
    description:'This is a great restaurant and sponsered by one of the top enterprenuer of the World. Tast the World best asian delights and have the asian experience.. ',
    notShowFee:'123 lei',
    minimumPeople:'50%',
    address:'  Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

  };
  $scope.creditCards =[{num:'1222-1222-2333-1', name:'M.Moeid Saleem',cvv:233},{num:'9312-1626-5212-5', name:'John Doe',cvv:121}];
  $scope.numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  $scope.languages = ['English','Romanian'];
  $scope.booking =  {};
  $scope.reservations = [{
    name:'Ali baba restaurant',
    city:'Rawalpindi',
    time:'17:00',
    people:6,
    refundStatus:true,
    img:'http://images.clipartnet.com/restaurant-clip-art-cartoon-restaurant-vector-6-cartoons-vector-free-download-600x600_5ae888.jpg',
    date:22
  },{
    name:'Subway',
    city:'Islamabad',
    timing:'17:00 ',
    people:3,
    refundStatus:true,
    img:'http://images.clipartnet.com/restaurant-clip-art-cartoon-restaurant-vector-6-cartoons-vector-free-download-600x600_5ae888.jpg',
    date:23
  },{
    name:'Hot and Spicy',
    city:'Lahore',
    timing:'15:00',
    people:6,
    refundStatus:false,
    img:'http://images.clipartnet.com/restaurant-clip-art-cartoon-restaurant-vector-6-cartoons-vector-free-download-600x600_5ae888.jpg',
    date:26
  },{
    name:'Biryani Center',
    city:'Faisalabad',
    timing:'13:00',
    people:6,
    refundStatus:false,
    img:'http://images.clipartnet.com/restaurant-clip-art-cartoon-restaurant-vector-6-cartoons-vector-free-download-600x600_5ae888.jpg',
    date:12
  }]

$scope.user = {
  name:'John Doe',
  email:'johndoe@gmail.com',
  password:'moeid123',
  card:'0000-0000-0000',
  creditCardName:'John Doe'
};

var ax = new Date();
$scope.bx = ax.getDate();
var getBx = parseInt($scope.bx)+22;
var getBx2 = parseInt($scope.bx)-22;
  $scope.filterF = [];
  $scope.filterP = [];
for(var i=parseInt($scope.bx)+1; i<getBx;i++){
    $scope.filterF.push(i);
}
for(var i=parseInt($scope.bx)-1; i>getBx2;i--){
    $scope.filterP.push(i);
}

console.log($scope.filterF);
console.log($scope.filterP);

console.log($scope.bx);

 $scope.filteredFuture = function () {
    return $scope.reservations.filter(function (letter) {
      return $scope.filterF.indexOf(letter.date) != -1;
    });
  };
 $scope.filteredPast = function () {
    return $scope.reservations.filter(function (letter) {
      return $scope.filterP.indexOf(letter.date) != -1;
    });
  };
  // $scope.filteredPast = function () {
  //   return $scope.reservations.filter(function (letter) {
  //     return $scope.filterBy.indexOf(letter.date) !== -1;
  //   });
  // };
  console.log($scope.filteredFuture());
  console.log($scope.filteredPast());

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Booking Confrimation',
     template:  `
     <p> We are sorry but hours you selected is not available  on 25 May 2017</p>
     
     <div class="list list-inset">
       <label class="item item-input">
         <i class="ion-ios-time-outline placeholder-icon"></i>
         <input type="time" placeholder="Search" required ng-model='booking.time'>
       </label>
     </div>
     `
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       $scope.showBooked();
     } else {
       console.log('You are not sure');
       $scope.showCancelled();
     }
   });
 }
 $scope.cred = {
  name:'',
  num:'',
  cvv:''
 };

 // Creditcard modal dialog
 $scope.showCreditModal = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Enter Credit card',
     template:  `
     <div ng-controller="mainCtrl">
     
     </div>
     <script>
     console.log($scope.cred);
     </script>
     `
   });

   confirmPopup.then(function(res) {
     if(res) {
     
       $scope.creditCards.push($scope.cred);
       console.log($scope.creditCards);
     } else {
       console.log('You are not sure');
      
     }
   });
 }
    // A confirm dialog
 $scope.showCancelled = function() {
   var confirmPopup = $ionicPopup.alert({
     title: 'Booking Cancelled',
     template:  `
     <p> We are sorry but Your reservation couldnot be made</p>
     
     `
   });

 };

  // An alert dialog
 $scope.showBooked = function(date,year,month,hour,minute) {
   var alertPopup = $ionicPopup.alert({
     title: 'Booking Confirmation',
     template: '<center> <b> {{booking.name}} </b> </center><br/> <p> Get there by <b>' +hour+' : '+(minute+30)+'</b> in a group of minimum 3 people or cancel the reservation by <b>'+hour+':'+(minute-30)+'</b></p> '
      });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };

$scope.dialogCheck = function(){
  var d = new Date($scope.booking.time);
  var d2 = new Date($scope.booking.date);
  var hour = d.getHours();
  var minute = d.getMinutes();
  var month = d.getMonth();
  var year = d.getYear();
var date = d2.toDateString();
  console.log('hours: '+hour + " and Minutes:"+minute+' '+date);
  
  if(hour<12){
     $scope.showConfirm();
  }else{
    $scope.showBooked(date,year,month,hour,minute);
  }
};



// Now for booking error
 // A confirm dialog
 $scope.showSettingBox = function() {
   var alertPop = $ionicPopup.alert({
     title: 'Error !',
     template:  `
     <p> We are sorry but to be able to proceed with the reservation you need to introduce
      your credit card  info by  accessing the settings menu.</p>
     
     `
   });

   alertPopup.then(function(res) {
      
   });


};

$scope.addCardData = function(){
  $scope.creditCards.push($scope.cred);
  $state.go('creditcard');
};
$scope.showS = true;

$scope.showSearch = function(){
  $scope.showS =true;
  
}

})
