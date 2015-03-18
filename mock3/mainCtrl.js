(function () {
  "use strict";
  angular.module('farmApp')
    .controller('MainController', function (MainService, $location, $routeParams, $route, $scope) {
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

	});




})();