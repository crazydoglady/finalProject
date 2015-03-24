(function(){
  "use strict";
  angular.module('farmApp')
  .controller('AdminCtrl', function(MainService, $scope, $location, $routeParams){

    var AdminCtrl = this;

    MainService.getFarmers().sucess(function(data){
      console.log('admin farmer');      
      adminCtrl.farmers = data; 
    });

    MainService.getRestaurants().success(function(data){
      console.log('admin restaurants');
      adminCtrl.restaurants = data;
    });

    MainService.getCustomers().success(function(data){
      console.log('admin customer');
      adminCtrl.customers = data;
    });



  })

})