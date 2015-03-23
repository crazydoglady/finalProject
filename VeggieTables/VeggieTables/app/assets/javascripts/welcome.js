var farmApp = angular
  .module('farmApp', ['ngRoute',
    'Devise',
    'ngAnimate',
    'ui.bootstrap',
    'uiGmapgoogle-maps'])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token").attr("content");
  })

  .config(function(AuthProvider){

  })
  .config(function($routeProvider){
    $routeProvider
    .when ('/', {
      templateUrl: 'assets/templates/index.html',
      controller: 'indexCtrl'
    })
    .when('/consumer', {
      templateUrl: 'assets/templates/consumers.html',
      controller: 'MainController as mainCtrl'
    })
     .when('/consumer/:custId', {
      templateUrl: 'assets/templates/profile.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/register', {
      templateUrl: 'assets/templates/register.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/contact', {
      templateUrl: 'assets/templates/contact.html',
      controller: 'MainController as mainCtrl'
      })
    .when('/admin', {
      templateUrl:'assets/templates/admin.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/admin/:restaurantId', {
      templateUrl:'assets/templates/adminRestaurant.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/admin/:farmerId', {
      templateUrl:'assets/templates/adminFarm.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/restaurant', {
      templateUrl: 'assets/templates/restaurants.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/restaurant/:restaurantId', {
      templateUrl: 'assets/templates/restaurantProfile.html',
      controller: 'RestaurantController as restCtrl'
    })
    .when('/farmers', {
      templateUrl: 'assets/templates/farmers.html',
      controller: 'FarmController as farmCtrl'
    })
    .when('/farmers/:farmerId', {
      templateUrl:'assets/templates/farmProfile.html',
      controller:'FarmController as farmCtrl'
    })

      // .when ('/producer', {
      //   templateUrl: 'assets/templates/farmers.html',
      //   controller: 'indexCtrl'
      // })
      // .when ('/restaurant', {
      //   templateUrl: 'assets/templates/restaurants.html',
      //   controller: 'indexCtrl'
      // })
      // .when ('/register', {
      //   templateUrl: 'assets/templates/register.html',
      //   controller: 'indexCtrl'
      // })
      // .when ('/contact',{
      //   templateUrl: 'assets/templates/contact.html',
      //   controller: 'indexCtrl'
      // })
      .when('users/sign_up',{
        templateUrl: 'assets/templates/auth.html',
        controller: 'indexCtrl'
      })
      .when('users/sign_in',{
        templateUrl: 'assets/templates/login.html',
        controller: 'indexCtrl'
      })
      .when('users/sign_out', {
        templateUrl: 'assets/templates/index.html',
        controller: 'indexCtrl',
        method: 'DELETE'
      })
      .when('/not_found',{
        templateUrl: 'assets/templates/not_found.html',
        controller: 'indexCtrl'
      })
     .otherwise ({
        templateUrl: 'assets/templates/not_found.html',
        controller: 'indexCtrl'
      })
  })
