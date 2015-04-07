angular.module('video.controllers', [])


.controller('VideoCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory,VideoDatas,$stateParams,$cordovaEmailComposer,$cordovaInAppBrowser) {
	$scope.style=AppConfig.Style;
	$scope.videoDatas = VideoDatas;
	$scope.pid = $stateParams.pid;
	$scope.title = title();
	
	
	function title(){
		for (var i = 0; i < VideoDatas.length; i++){
			if ($stateParams.id == VideoDatas[i].id){
				return VideoDatas[i].title;
			}
		}
		return "详细";
	}
	
	$scope.openUrl = function(id){
		for (var i = 0; i < VideoDatas.length; i++){
			if (id == VideoDatas[i].id){
				var options = {
					      location: 'yes',
					      clearcache: 'yes',
					      toolbar: 'yes'
					    };
				
				if (ionic.Platform.isIOS()) return  $cordovaInAppBrowser.open(VideoDatas[i].ios, '_self', options);
				 $cordovaInAppBrowser.open(VideoDatas[i].android, '_system', options);
			}
		}
	}
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	
})
;
