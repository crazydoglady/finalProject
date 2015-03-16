(function () {
  "use strict";
  angular.module('farm')
    .controller('FarmController', function (FarmService, $location, $routeParams) {
      var farmCtrl = this;
       
       FarmService.getProducers().success(function(data){
       	farmCtrl.producers = data;
       });
      
      FarmService.getSingleProducer($routeParams.producerId).success(function(data){
      	farmCtrl.SingleProducer = data;
      });

      farmCtrl.addProducer = function (newFarm){
      	console.log(newFarm);
      	FarmService.addProducer(newFarm);
      	$location.path('producer/:producerId');
      }

      farmCtrl.deleteProducer = function (producer) {
      	FarmService.deleteFarm(producer);
      }

      farmCtrl.editProducer = function(producer){
      	FarmService.editFarm(producer, $routeParams.FarmId);
      }

	});

})();