(function () {
  "use strict";
  angular.module('farmApp')
    .controller('MainController', function (MainService, $location, $routeParams) {
      var mainCtrl = this;

       MainService.getProfiles().success(function(data){
       	mainCtrl.members = data;
       });
      
      MainService.getSingleProfile($routeParams.memberId).success(function(data){
      	mainCtrl.SingleMember = data;
      });

      mainCtrl.addProfile = function (newMember){      
      	console.log(newMember);
      	MainService.addMember(newMember);
      	console.log(newMember);
      	$location.path('/auth');
      }

      mainCtrl.deleteProfile = function (member) {
      	MainService.deleteMember(member);
      }

      mainCtrl.editProfile = function(member){
      	MainService.editMember(member, $routeParams.memberId);
      }

	});




})();