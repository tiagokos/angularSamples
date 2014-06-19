var app = angular.module('app', []);
app.controller('FirstController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount) {
		$scope.counter += amount;
	};
	$scope.substract = function(amount) {
		$scope.counter -= amount;
	};
});