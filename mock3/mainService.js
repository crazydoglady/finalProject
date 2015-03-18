(function () {
"use Strict";
angular.module('farmApp')
.factory('MainService', function($http, $rootScope, $location, $routeParams){
	
	var server = 'http://tiy-fee-rest.herokuapp.com/collections/commonground';
	

	var getMembers = function () {
		return $http.get(server);
	};

	var getOneMember = function (id) {
		return $http.get(server + '/' + id);
	};

	var addMember = function (newMember) {
		console.log(newMember.name , "member name");
		console.log(newMember.category);
		$http.post(server, newMember);
	};

	var deleteMember = function (id) {
		console.log(id);
		$http.delete(server + '/' + id);
		//$location.path('#/admin');

	};

	var editMember = function (member, id) {
		$http.put(server + '/' + id, member)
	};
	return	{
		//public : private
		getProfiles: getMembers,
		getSingleProfile: getOneMember,
		addProfile: addMember,
		deleteProfile: deleteMember,
		editProfile: editMember
	}
});



})();//end big function