(function () {
  "use strict";
  angular.module('farmApp')
    .controller('MainController', function(MainService, $location, $routeParams, $route, $scope) {
      var mainCtrl = this;
 
      MainService.getProfiles().success(function(data){
       mainCtrl.members = data;
       });
      
      MainService.getSingleProfile($routeParams.memberId).success(function(data){
      	mainCtrl.SingleMember = data;
      });

      mainCtrl.addProfile = function (newMember){      
      	//console.log(newMember);
      	MainService.addProfile(newMember);
      	// console.log(newMember);
      	//$location.path('/auth');
      }

      mainCtrl.deleteProfile = function (member) {
      	MainService.deleteProfile(member);

      }

      mainCtrl.editProfile = function (member){
        console.log(member , "edit Profile started");
        console.log($routeParams.memberId);
      	MainService.editProfile(member, $routeParams.memberId);
      }

	})
    .controller('RestaurantController', function (RestaurantService, $location, $routeParams) {
      var restCtrl = this;
       
       RestaurantService.getRestaurants().success(function(data){
        restCtrl.restaurants = data;
       });
      
      RestaurantService.getSingleRestaurant($routeParams.restaurantId).success(function(data){
        restCtrl.SingleRestaurant = data;
      });

      restCtrl.addRestaurant = function (newRest){
        console.log(newRest);
        RestaurantService.addRestaurant(newRest);
        $location.path('/restaurant');
      }

      restCtrl.deleteRestaurant = function (restaurant) {
        RestaurantService.deleteRestaurant(restaurant);
      }

      restCtrl.editRestaurant = function(restaurant){
        console.log(restaurant);
        console.log($routeParams, 'restCtrl');
        RestaurantService.editRestaurant(restaurant, $routeParams.restaurantId);
      }

  })

})();
