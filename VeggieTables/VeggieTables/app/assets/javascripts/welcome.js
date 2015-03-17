var farmApp = angular
  .module('farmApp', ['ngRoute'])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token").attr("content");
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

      .when ('/not_found',{
        templateUrl: 'assets/templates/not_found.html',
        controller: 'indexCtrl'
      })
     .otherwise ({
        templateUrl: 'assets/templates/not_found.html',
        controller: 'indexCtrl'
      })
  })
        

