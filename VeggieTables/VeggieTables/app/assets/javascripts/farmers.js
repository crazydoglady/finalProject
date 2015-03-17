  angular
  .module('farmApp', ['ngRoute'])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token").attr("content");
  })

  .config(function($routeProvider){
    $routeProvider
      .when('/register',{
        templateUrl: 'assets/templates/register.html',
        controller: 'indexCtrl'
      })
  })