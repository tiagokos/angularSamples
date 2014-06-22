var app = angular.module('app', []);

app.directive('myDirective', function() {
	return {
		restrict: 'A',
		//Replace the directive tag with the template
		replace: true,
		scope: {
			myUrl: '=someAttr',
			myLinkText: '@'
		},
		template: '<a href="{{ myUrl }}">{{ myLinkText }}</a>'
	}
});