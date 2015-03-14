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
      controller: 'FarmController as farmCtrl'
    })
    .when('/producer/:producerId', {
      templateUrl:'farmerFeature/profile.html',
      controller:'farmerControler as farmCtrl'
    })
  });//end config
  })();//end farm.js