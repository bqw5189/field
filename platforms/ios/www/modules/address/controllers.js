angular.module('address.controllers', [])

.controller('AddressCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory,AddressDatas,$stateParams) {
	$scope.style=AppConfig.Style;
	$scope.addressDatas = AddressDatas;
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	
})
;
