(function () {
  "use strict";

  angular.module('farmApp', [
    'ngRoute',
    'farm'
    //'restaurant'
    // 'consumer',    
    // 'admin'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/consumer', {
      templateUrl: 'consumerFeature/consumers.html',
      controller: 'MainController as CustCtrl'
    })
     .when('/consumer/:custId', {
      templateUrl: 'consumerFeature/profile.html',
      controller: 'MainController as CustCtrl'
    })
     .when('/farmer', {
      templateUrl: 'farmerFeature/farmers.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/farmer/:memberId', {
      templateUrl:'farmerFeature/farmProfile.html',
      controller:'MainController as mainCtrl'
    })
    .when('/restaurant', {
      templateUrl: 'restaurantFeature/restaurants.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/restaurant/:memberId', {
      templateUrl: 'restaurantFeature/profile.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'MainController as mainCtrl'
      })
    .when('/auth', {
      templateUrl: 'views/auth.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/admin', {
      templateUrl:'views/admin.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/admin/:memberId', {
      templateUrl:'views/adminprofile.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/not_found', {
      templateUrl: 'views/not_found.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise ({
      redirectTo: '/not_found'
    })//end otherwise, this is equivalent to if/else statement in vanilla javascript
  });//end config

})();
