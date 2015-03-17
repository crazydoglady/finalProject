(function () {
  "use strict";

  angular.module('farmApp', [
    'ngRoute',
    'farm',
    //'auth'
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
      controller: 'ConsumerController as CustCtrl'
    })
     .when('/consumer/:custId', {
      templateUrl: 'consumerFeature/profile.html',
      controller: 'ConsumerController as CustCtrl'
    })
    .when('/restaurant', {
      templateUrl: 'restaurantFeature/restaurants.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/restaurant/:producerId', {
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
    .when('/not_found', {
      templateUrl: 'views/not_found.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise ({
      redirectTo: '/not_found'
    })//end otherwise, this is equivalent to if/else statement in vanilla javascript
  });//end config

})();
