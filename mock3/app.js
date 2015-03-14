(function () {
  "use strict";

  angular.module('farmApp', [
    'ngRoute',
    'farm'
    // 'consumer',
    // 'producer',
    // 'restaurant',
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
      controller: 'restaurantController as restCtrl'
    })
    .when('/restaurant/:restaurantId', {
      templateUrl: 'restaurantFeature/profile.html',
      controller: 'restaurantController as restCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
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
