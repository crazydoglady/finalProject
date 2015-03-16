(function () {
"use Strict";
angular.module('farm')
.factory('FarmService', function($http, $rootScope, $routeParams){
	
	var server = 'http://tiy-fee-rest.herokuapp.com/collections/commonground';
	

	var getRests = function () {
		return $http.get(server);
	};

	var getOneRest = function (id) {
		return $http.get(server + '/' + id);
	};

	var addRest = function (newProducer) {
		console.log(newProducer.name);
		$http.post(server, newProducer);
	};

	var deleteRest = function (id) {
		$http.delete(server + '/' + id);
	};

	var editRest = function (producer, id) {
		$http.put(server + '/' + id, producer)
	};
	return	{
		//public : private
		getEatery: getRest,
		getSingleEatery: getOneRest,
		addEatery: addRest,
		deleteEatery: deleteRest,
		editEatery: editRest
	}
});



})();//end big function