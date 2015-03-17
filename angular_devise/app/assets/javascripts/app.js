(function () {
  "use strict";


  angular.module('farmApp',['ngRoute'])
  .config(function($httpProvider) {
  $httpProvider.defaults.headers.common['X-CRSF-Token'] = $("meta[name=csrf-token]").attr("content");
  })
    // 'consumer',
    // 'producer',
    // 'restaurant',
    // 'admin'
  
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/assets/templates/index.html',
      controller: 'IndexController as indexCtrl'
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
    .otherwise({
      templateUrl: 'assets/templates/index.html',
      controller: 'indexCtrl'
      })//end otherwise, this is equivalent to if/else statement in vanilla javascript
  });//end config

})();
