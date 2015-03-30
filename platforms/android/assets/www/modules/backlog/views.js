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
  .state('field.home.backlog.detail', {
	    url: "/lists/:id",
	    templateUrl: "modules/backlog/detail.html",
	    controller:'BacklogCtrl'
  })
;
  
});