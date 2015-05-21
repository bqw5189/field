angular.module('news.controllers', [])

.controller('NewsCtrl', function($scope,AppConfig, $ionicLoading,$location,$ionicHistory,NewsDatas,InformDatas,AnnouncementDatas,$stateParams,$http) {
	$scope.style=AppConfig.Style;
	$scope.newsDatas = NewsDatas;
	$scope.informDatas = InformDatas;
	$scope.announcementDatas = AnnouncementDatas;
	
	$http.get('modules/news/news.json')
		.success(
	        function(data, status, header, config){
	            $scope.newsDatas = data;
	        }
	    )
	    .error(
	        function(data, status, header, config){
	            alert("error");
	        }
	    );
	
	
	$scope.goBack=function(){
		if($location.url() == '/field/home/news/lists/inform' || $location.url() == '/field/home/news/lists/announcement'|| $location.url() == '/field/home/news/lists/news'){
			$location.path("/field/home/nav");
		}else{
			$ionicHistory.goBack();
		}
	}
	
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
	  
	  /**
	   * backloged list
	   */
	  
	  /**
	   * detail
	   */
	  $scope.backlog=function(){
			for (var i = 0; i < NewsDatas.length; i++){
				if (NewsDatas[i].id == $stateParams.id){
					return NewsDatas[i];
				}
			}
			return null;
		}
	  
	  $scope.title=function(){
			for (var i = 0; i < NewsDatas.length; i++){
				if (NewsDatas[i].id == $stateParams.id){
					return NewsDatas[i].title;
				}
			}
			return "待办详细";
		}
	  
	  $scope.onSubmit = function(backlog){
		  NewsDatas.push(backlog);
		  
		  NewsDatas.splice(NewsDatas.indexOf(backlog), 1);
		  
		  $ionicHistory.goBack();
	  }
	  
	  $scope.isBacklog = function(){
		  for (var i = 0; i < NewsDatas.length; i++){
				if (NewsDatas[i].id == $stateParams.id){
					return true;
				}
			}
		  return false;
	  }
})
;
