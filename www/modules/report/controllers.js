angular.module('report.controllers', [])


.controller('ReportCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory,$stateParams,$cordovaEmailComposer) {
	$scope.style=AppConfig.Style;
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	
})
;
