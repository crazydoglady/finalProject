(function () {
"use Strict";
angular.module('farmApp')
.factory('MainService', function($http, $rootScope, $location, $routeParams){

	var server = 'http://localhost:3000';


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
})
//==============end MainService


.factory('RestaurantService', function( $http, $rootScope, $routeParams){

	var server = 'http://localhost:3000/#/restaurant';

	var getRests = function () {
		return $http.get(server);
	};

	var getOneRest = function (id) {
		console.log(id , 'RestServId');
		return $http.get(server + '/' + id);
	};

	var addRest = function (newEats) {
		console.log(newEats.name);
		$http.post(server, newEats);
	};

	var deleteRest = function (id) {
		$http.delete(server + '/' + id);
	};

	var editRest = function (producer, id) {
		$http.put(server + '/' + id, producer)
	};
	return	{
		//public : private
		getRestaurants: getRests,
		getSingleRestaurant: getOneRest,
		addRestaurant: addRest,
		deleteRestaurant: deleteRest,
		editRestaurant: editRest
	}
})

//=============end RestaurantService


.factory('FarmService', function($http, $rootScope, $routeParams){

	var server = 'http://localhost:3000/#/producer';

	var getFarms = function () {
		return $http.get(server);
	};
	var getOneFarm = function (id) {
		console.log(id);
		return $http.get(server + '/' + id);
	};
	var addFarm = function (newProducer) {
		console.log(newProducer);
		$http.post(server, newProducer);
	};

	var deleteFarm = function (id) {
		$http.delete(server + '/' + id);
	};

	var editFarm = function (producer, id) {
		console.log(producer);
		console.log(id, "editFarmSVC")
		$http.put(server + '/' + id, producer)
	};
	return	{
		//public : private
		getProducers: getFarms,
		getSingleProducer: getOneFarm,
		addProducer: addFarm,
		deleteProducer: deleteFarm,
		editProducer: editFarm
	}
});
})();//end big function


//==================end FarmService
