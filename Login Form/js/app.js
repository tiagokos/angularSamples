var app = angular.module('app', []);

app.directive('ensureUnique', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function(n) {
				if (!n) return;
				$http({
					method: 'POST',
					url: '/api/check/' + attrs.ensureUnique,
					data: {'field': attrs.ensureUnique}
				}).success(function(data) {
					c.$setValidity('unique', data.isUnique);
				}).error(function(data) {
					//Just to skip validation and enable submit button
					c.$setValidity('unique', true);
				});
			});
		}
	}
});

//If we want to display error messages only after submitting the form
app.controller('signupController', function($scope) {
	$scope.submitted = false;
	$scope.signupForm = function() {
		if ($scope.signup_form.$valid) {
			//Submit as normal
		} else {
			$scope.signup_form.submitted = true;
		}
	}
});

//If we want to display error only after blur
app.directive('ngFocus', [function () {
	var FOCUS_CLASS = 'ng-focused';
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			ctrl.$focused = false;
			element.bind('focus', function(evt) {
				element.addClass(FOCUS_CLASS);
				scope.$apply(function() {
					ctrl.$focused = true;
				});
			}).bind('blur', function(evt) {
				element.removeClass(FOCUS_CLASS);
				scope.$apply(function() {
					ctrl.$focused = false;
				});
			});
		}
	}
}]);