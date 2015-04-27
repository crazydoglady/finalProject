(function () {
  "use strict";
  angular.module('farmApp')
    .controller('MainController', function(MainService, $location, $routeParams, $route, $scope) {
      var mainCtrl = this;
      mainCtrl.pageClass = 'page-main'

      MainService.getProfiles().success(function(data){
       mainCtrl.members = data;
       });

      // MainService.getSingleProfile($routeParams.memberId).success(function(data){
      //   mainCtrl.SingleMember = data;
      // });

      // mainCtrl.addProfile = function (newMember){
      //  //console.log(newMember);
      //  MainService.addProfile(newMember);
      //  // console.log(newMember);
      //  //$location.path('/auth');
      // }

      // mainCtrl.deleteProfile = function (member) {
      //  MainService.deleteProfile(member);

      // }

      // mainCtrl.editProfile = function (member){
      //   console.log(member , "edit Profile started");
      //   console.log($routeParams.memberId);
      //  MainService.editProfile(member, $routeParams.memberId);
      // }

  })
    .controller('RestaurantController', ['RestaurantService', function (RestaurantService, $location, $routeParams, $scope) {
      var restCtrl = this;
      restCtrl.pageClass= 'page-restaurants'

       RestaurantService.getRestaurants().success(function(data){
        restCtrl.restaurants = data;
       });

      // RestaurantService.getSingleRestaurant($routeParams.restaurantId).success(function(data){
      //   restCtrl.SingleRestaurant = data;
      // });

      restCtrl.addRestaurant = function (newRest){
        console.log(newRest);
        RestaurantService.addRestaurant(newRest);
        $location.path('/restaurant');
      }

      restCtrl.deleteRestaurant = function (restaurant) {
        console.log(restaurant, "deleted");
        console.log(restaurant._id);
        RestaurantService.deleteRestaurant(restaurant._id);
      }

      restCtrl.editRestaurant = function(restaurant){
        console.log(restaurant);
        console.log($routeParams, 'restCtrl');
        RestaurantService.editRestaurant(restaurant, $routeParams.restaurantId);
      }

  }])
    .controller('FarmController',['FarmService', function (FarmService, $location, $routeParams, $scope) {
      var farmCtrl = this;
      farmCtrl.pageClass = 'page-farmers';

      FarmService.getProducers().success(function(data){
        console.log("**********")
        console.log(data)
        farmCtrl.producers = data;
       });

      // FarmService.getSingleProducer($routeParams.farmerId).success(function(data){
      //   farmCtrl.SingleProducer = data;
      // });

      farmCtrl.addProducer = function (newFarm){
        console.log(newFarm);
        FarmService.addProducer(newFarm);
        // $location.path('/farmers');
      }

      farmCtrl.deleteProducer = function (producer) {
        console.log(producer , "deleted");
        console.log(producer._id);
       FarmService.deleteProducer(producer._id);
      }

      farmCtrl.editProducer = function(producer){
        console.log(producer);
        console.log($routeParams.farmerId);
        FarmService.editProducer(producer, $routeParams.farmerId);
      }

  }])
    .controller('GoogleMapsController', function($scope, $location, $routeParams, $timeout, $log){
      var mapCtrl = this;
      // $scope.map = {
      //   center: {latitude: 32.8, longitude: -79.8},
      //   zoom: 4
      // };

      // $scope.markers=[];
      $scope.map = {center: {latitude: 32.8, longitude: -79.8 }, zoom: 4 };
    $scope.map = {center: {latitude: 32.8, longitude: -79.8 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: $scope.map.center.latitude,
        longitude: $scope.map.center.longitude,
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: false,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
    // $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
    //   if (_.isEqual(newVal, oldVal))
    //     return;
    //   $scope.coordsUpdates++;
    // });
    // $timeout(function () {
    //   $scope.marker.coords = {
    //     latitude: 42.1451,
    //     longitude: -100.6680
    //   };
    //   $scope.dynamicMoveCtr++;
    //   $timeout(function () {
    //     $scope.marker.coords = {
    //       latitude: 43.1451,
    //       longitude: -102.6680
    //     };
    //     $scope.dynamicMoveCtr++;
    //   }, 2000);
    // }, 1000);


  });

})();