var app = angular.module('app', []);
app.controller('MyController', function($scope, $parse) {
	$scope.$watch('expr', function(newVal, oldVal, scope) {
		if (newVal != oldVal) {
			var parseFun = $parse(newVal);
			$scope.parsedValue = parseFun(scope);
		}
	});
});