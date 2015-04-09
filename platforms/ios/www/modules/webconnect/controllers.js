angular.module('webconnect.controllers', [])


.controller('WebConnectCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory,$stateParams,$cordovaEmailComposer) {
	$scope.style=AppConfig.Style;
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	
})
;
