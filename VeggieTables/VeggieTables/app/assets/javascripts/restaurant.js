angular.module('farmApp', ['ngRoute'])
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token").attr("content");
  })

  .config(function($routeProvider){
    $routeProvider
      .when('/restaurant/new',{
        templateUrl: 'assets/templates/newRestaunt.html',
        controller: 'restaurantCtrl'
      })
  })