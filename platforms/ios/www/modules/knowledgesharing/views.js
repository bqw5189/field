field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home.knowledgesharing', {
    url: "/knowledgesharing",
    templateUrl: "modules/knowledgesharing/page.html",
    controller:'KnowledgesharingCtrl'
    	
  })
  .state('field.home.knowledgesharing.detail', {
	    url: "/detail",
	    templateUrl: "modules/knowledgesharing/detail.html",
	    controller:'KnowledgesharingCtrl'
  })
;
  
});