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
		$rootScope.$broadcast("member added");
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
	
	var server = 'http://tiy-fee-rest.herokuapp.com/collections/vtrestaurants';
	
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
		$rootScope.$apply();
	};

	var deleteRest = function (id) {
		$http.delete(server + '/' + id);
		$rootScope.$broadcast("Restaurant: deleted");
	};

	var editRest = function (producer, id) {
		$http.put(server + '/' + id, producer)
		$rootScope.$broadcast("Restaurant: edited");
		$location.path('/restaurants');
	};
	var getCoords = function (restaurant) {
  	  $http.get(server + restaurant._id).success(function(){
    	restaurant.coords = {};
    	console.log(restaurant.coords, "coords");
    	restaurant.coords.longitude = restaurant.longitude;
    	restaurant.coords.latitude = restaurant.latitude;
  	  });
  	}; 

	return	{
		//public : private
		getRestaurants: getRests,
		getSingleRestaurant: getOneRest,
		addRestaurant: addRest,
		deleteRestaurant: deleteRest,
		editRestaurant: editRest,
		getCoords: getCoords
	}
})

//=============end RestaurantService


.factory('FarmService', function($http, $rootScope, $routeParams){
	
	var server = 'http://tiy-fee-rest.herokuapp.com/collections/vtfarmers';

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
	var getCoords = function (producer) {
  	  $http.get(server + producer._id).success(function(){
    	producer.coords = {};
    	console.log(producer.coords, "coords");
    	producer.coords.longitude = producer.longitude;
    	producer.coords.latitude = producer.latitude;
  	  });

	};
	var getFarmCoords = function (producer) {
        var replacedStreet = producer.address.split(' ').join('+');
        var replacedCity = producer.city.split(' ').join('+');
        var replacedState = producer.state.split(' ').join('+');
        var address = replacedStreet + ',+' + replacedCity + ',+' + replacedState;
        var apiKey = '&key=AIzaSyAMmjqHUi8UlrbCFrrwBsaMrhtgLAhW0n4';
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;
        console.log(url);
        $http.get(url).success(function(dataset){
          console.log(dataset);
          var compGeo = dataset.results[0].geometry.location;
          producer.coords = {};
          producer.coords.longitude = compGeo.lng;

          producer.coords.latitude = compGeo.lat;
          editFarm(producer, producer._id);
        });
      };

	return	{
		//public : private
		getProducers: getFarms,
		getSingleProducer: getOneFarm,
		addProducer: addFarm,
		deleteProducer: deleteFarm,
		editProducer: editFarm,
		getCoords : getCoords,
		getFarmCoords: getFarmCoords
	}
});
})();//end big function


//==================end FarmService






