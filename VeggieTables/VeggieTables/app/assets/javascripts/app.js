(function () {
  "use strict";

  angular.module('farmApp', [
    'ngRoute',
    // 'consumer',
    // 'producer',
    // 'restaurant',
    // 'admin'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/assets/templates/index.html',
      controller: 'IndexController as IndexCtrl'
    })
    .when('/consumer', {
      templateUrl: 'consumerFeature/consumers.html',
      controller: 'ConsumerController as CustCtrl'
    })
     .when('/consumer/:custId', {
      templateUrl: 'consumerFeature/profile.html',
      controller: 'ConsumerController as CustCtrl'
    })
    .when('/producer', {
      templateUrl: 'farmerFeature/farmers.html',
      controller: 'farmerController as farmCtrl'
    })
    .when('/producer/:producerId', {
      templateUrl:'farmerFeature/profile.html',
      controller:'farmerControler as farmCtrl'
    })
    .when('/restaurant', {
      templateUrl: 'restaurantFeature/restaurants.html',
      controller: 'restaurantController as restCtrl'
    })
    .when('/restaurant/:restaurantId', {
      templateUrl: 'restaurantFeature/profile.html',
      controller: 'restaurantController as restCtrl'
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
