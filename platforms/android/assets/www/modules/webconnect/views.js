field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home.webconnect', {
    url: "/webconnect",
    templateUrl: "modules/webconnect/page.html",
    controller:'WebConnectCtrl'
    	
  })
  .state('field.home.webconnect.lists', {
	    url: "/lists",
	    templateUrl: "modules/webconnect/lists.html",
	    controller:'WebConnectCtrl'
  })
  .state('field.home.webconnect.detail', {
	    url: "/lists/:pid",
	    templateUrl: "modules/webconnect/detail.html",
	    controller:'WebConnectCtrl'
  })
;
  
});