app
.config( function ($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('signup', {
      url: "/signup",
      templateUrl: "app/views/signup.html",
      controller:'AuthCtrl'
    })

    .state('register',{
      url:'/register',
      templateUrl:'app/views/register.html',
      controller:'AuthCtrl'
    })
    .state('login',{
      url:'/login',
      templateUrl:'app/views/login.html',
      controller:'AuthCtrl'

    })
    .state('booking',{
      url:'/booking',
      templateUrl:'app/views/booking.html',
      controller:'mainCtrl'

    })
    .state('setting',{
      url:'/setting',
      templateUrl:'app/views/setting.html',
      controller:'profileCtrl'

    })
     .state('social',{
      url:'/social',
      templateUrl:'app/views/social.html',
      controller:'AuthCtrl'

    })
     .state('password',{
      url:'/password',
      templateUrl:'app/views/password.html',
      controller:'profileCtrl'

    })
      .state('reservations',{
      url:'/reservations',
      templateUrl:'app/views/reservations.html',
      controller:'mainCtrl'
    }) 
     .state('mainscreen',{
      url:'/mainscreen',
      templateUrl:'app/views/mainscreen.html',
      controller:'mainCtrl'
    })
      .state('detail',{
      url:'/detail',
     params:{res: null},
      templateUrl:'app/views/detail.html',
      controller:'mainCtrl'

    })
     
      .state('home',{
      url:'/home',
      templateUrl:'app/views/logo.html',
      controller:'mainCtrl'
    })
     .state('creditcard',{
      url:'/creditcard',
      templateUrl:'app/views/creditcard.html',
      controller:'profileCtrl'
    }).state('newcard',{
      url:'/newcard',
      templateUrl:'app/views/newcard.html',
      controller:'profileCtrl'
    }).state('help',{
      url:'/help',
      templateUrl:'app/views/help.html',
      controller:'mainCtrl'
    });
    $urlRouterProvider.otherwise('/home');

})