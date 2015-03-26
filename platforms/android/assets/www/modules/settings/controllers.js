angular.module('settings.controllers', [])

.controller('SettingsCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory) {
	$scope.style=AppConfig.Style;
	
	$scope.checkServer = function(){
		$ionicLoading.show({
	      template: '服务器地址验证通过'
	    });
		
		window.setTimeout($ionicLoading.hide,1000); 
	}
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
})
;
