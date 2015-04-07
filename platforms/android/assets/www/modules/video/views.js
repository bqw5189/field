field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home.video', {
    url: "/video",
    templateUrl: "modules/video/page.html",
    controller:'VideoCtrl'
    	
  })
  .state('field.home.video.lists', {
	    url: "/lists/:pid",
	    templateUrl: "modules/video/lists.html",
	    controller:'VideoCtrl'
  })
  .state('field.home.video.detail', {
	    url: "/lists/:pid/:id",
	    templateUrl: "modules/video/detail.html",
	    controller:'VideoCtrl'
  })
;
  
});