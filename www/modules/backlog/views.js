field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home.backlog', {
    url: "/backlog",
    templateUrl: "modules/backlog/page.html",
    controller:'BacklogCtrl'
    	
  })
  .state('field.home.backlog.lists', {
	    url: "/lists",
	    templateUrl: "modules/backlog/lists.html",
	    controller:'BacklogCtrl'
  })
  .state('field.home.backlog.lists.backlog', {
	    url: "/backlog",
	    views: {
	    	'backlog-view': {
	    		templateUrl: "modules/backlog/lists-backlog.html",
    	        controller:'BacklogCtrl'
    	      }
    	    }
  })
  .state('field.home.backlog.lists.backloged', {
	    url: "/backloged",
	    views: {
	    	'backloged-view': {
	    		templateUrl: "modules/backlog/lists-backloged.html",
  	        controller:'BacklogCtrl'
  	      }
  	    }
})
  .state('field.home.backlog.detail', {
	    url: "/lists/:id",
	    templateUrl: "modules/backlog/detail.html",
	    controller:'BacklogCtrl'
  })
;
  
});