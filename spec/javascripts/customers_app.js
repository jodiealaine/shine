app.controller("CustomerSearchController", [
	'$scope','$http',
	function($scope, $http) {
		module("customers");
		var scope = $rootScope.$new();
		var controller = $controller("CustomerSearchController",
																	{"$scope": scope});

	}])