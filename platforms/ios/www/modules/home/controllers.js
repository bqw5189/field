angular.module('home.controllers', [])

.controller('HomeCtrl', function($scope,BacklogDatas) {
	$scope.topSlideIndex = 0;
	$scope.nowDate = YYMMDD();
	$scope.nowDateWeek = weekday();
	$scope.nowDateLunar = solarDay();
	
	$scope.backlogsCount = function(){return BacklogDatas.length;}
	
	
	
	$scope.slideHasChanged = function(index){
		$scope.topSlideIndex = index;
	}
})
;
