(function () {
  "use strict";

  angular.module('farm', [
    'ngRoute'
    // 'consumer',
    // 'producer',
    // 'restaurant',
    // 'admin'
  ])
  .config(function ($routeProvider){
  	$routeProvider
   .when('/producer', {
      templateUrl: 'farmerFeature/farmers.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/producer/:producerId', {
      templateUrl:'farmerFeature/profile.html',
      controller:'MainController as mainCtrl'
    })
  });//end config
  })();//end farm.js