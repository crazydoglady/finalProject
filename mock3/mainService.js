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
		$http.post(server, newMember);
		if (newMember.category === 'producer') {
			$location.path('/farmers');
		} else if (newMember.category === 'consumer') {
			$location.path('/consumer');
		} else if (newMember.category === 'restaurant') {
			$location.path('/restaurant');
		}
	};

	var deleteMember = function (id) {
		console.log(id);
		$http.delete(server + '/' + id);
		//$location.path('#/admin');

	};

	var editMember = function (member, id) {
		console.log(id);
		console.log(member);
		$http.put(server + '/' + id, member);
		$location.path('/admin');
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

//==================end mainService ===============






