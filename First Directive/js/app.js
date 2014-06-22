var app = angular.module('app', []);

app.directive('myDirective', function() {
	return {
		restrict: 'EAC',
		//Replace the directive tag with the template
		replace: true,
		template: '<a href="http://google.com">Click me to go to Google</a>'
	}
});