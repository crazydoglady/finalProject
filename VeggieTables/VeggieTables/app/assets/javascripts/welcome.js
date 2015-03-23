var farmApp = angular
  .module('farmApp', ['ngRoute', 'Devise'])
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
      .when ('/producer', {
        templateUrl: 'assets/templates/farmers.html',
        controller: 'indexCtrl'
      })
      .when ('/restaurant', {
        templateUrl: 'assets/templates/restaurants.html',
        controller: 'indexCtrl'
      })
      .when ('/register', {
        templateUrl: 'assets/templates/register.html',
        controller: 'indexCtrl'
      })
      .when ('/contact',{
        templateUrl: 'assets/templates/contact.html',
        controller: 'indexCtrl'
      })
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
        

