
farmApp.controller('restaurantCtrl', function (RestaurantService, $location, $routeParams) {
  var restCtrl = this;   
    
    $scope.pageClass= 'page-restaurants';
       
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
        console.log(restaurant, "deleted");
        console.log(restaurant._id);
        RestaurantService.deleteRestaurant(restaurant._id);
      }

      restCtrl.editRestaurant = function(restaurant){
        console.log(restaurant);
        console.log($routeParams, 'restCtrl');
        RestaurantService.editRestaurant(restaurant, $routeParams.restaurantId);
      }

  });
});

