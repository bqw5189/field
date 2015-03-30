angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope,BacklogDatas) {
	$scope.topSlideIndex = 0;
	
	$scope.backlogsCount = function(){return BacklogDatas.length;}
	
	
	
	$scope.slideHasChanged = function(index){
		$scope.topSlideIndex = index;
	}
})
;
