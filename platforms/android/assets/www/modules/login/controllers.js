angular.module('login.controllers', [])

.controller('LoginCtrl', function($scope,AppConfig) {
	$scope.style=AppConfig.Style;
})
;
