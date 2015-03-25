angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope) {
	$scope.topSlideIndex = 0;
	
	
	
	$scope.slideHasChanged = function(index){
		$scope.topSlideIndex = index;
	}
})
;
