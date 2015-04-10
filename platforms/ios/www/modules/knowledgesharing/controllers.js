angular.module('knowledgesharing.controllers', [])


.controller('KnowledgesharingCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory,$stateParams,$cordovaEmailComposer) {
	$scope.style=AppConfig.Style;
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	
})
;
