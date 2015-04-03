field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home.report', {
    url: "/report",
    templateUrl: "modules/report/page.html",
    controller:'ReportCtrl'
    	
  })
  .state('field.home.report.lists', {
	    url: "/lists/:pid",
	    templateUrl: "modules/report/lists.html",
	    controller:'ReportCtrl'
  })
  .state('field.home.report.lists-report', {
	    url: "/lists-report",
	    templateUrl: "modules/report/lists-report.html",
	    controller:'ReportCtrl'
  })
  .state('field.home.report.detail', {
	    url: "/lists/:pid/:id",
	    templateUrl: "modules/report/detail.html",
	    controller:'ReportCtrl'
  })
;
  
});