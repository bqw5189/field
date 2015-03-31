angular.module('address.controllers', [])

.controller('AddressCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory,AddressDatas,$stateParams) {
	$scope.style=AppConfig.Style;
	$scope.addressDatas = AddressDatas;
	$scope.pid = $stateParams.pid;
	$scope.title = title();
	
	function title(){
		for (var i = 0; i < AddressDatas.length; i++){
			if ($stateParams.id == AddressDatas[i].id){
				return AddressDatas[i].title;
			}
		}
		return "详细";
	}
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	
})
;
