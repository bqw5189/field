angular.module('backlog.controllers', [])

.controller('BacklogCtrl', function($scope,AppConfig, $ionicLoading,$ionicHistory,BacklogDatas,$stateParams) {
	$scope.style=AppConfig.Style;
	
	$scope.title=function(){
		for (var i = 0; i < BacklogDatas.length; i++){
			if (BacklogDatas[i].id == $stateParams.id){
				return BacklogDatas[i].title;
			}
		}
		return "待办详细";
	}
	
	$scope.goBack=function(){
		$ionicHistory.goBack();
	}
	
	$scope.backlogDatas = BacklogDatas;
	
	/*
	   * if given group is the selected group, deselect it
	   * else, select the given group
	   */
	  $scope.toggleGroup = function(group) {
	    if ($scope.isGroupShown(group)) {
	      $scope.shownGroup = null;
	    } else {
	      $scope.shownGroup = group;
	    }
	  };
	  
	  $scope.isGroupShown = function(group) {
		  if ('审批' == group){
			  return true;
		  }
	    return $scope.shownGroup === group;
	  };
})
;
