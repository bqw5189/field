field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.login', {
    url: "/login",
    templateUrl: "modules/login/page.html",
    controller:'LoginCtrl'
    	
  })
//  $urlRouterProvider.when('/subscribe','/subscribe/list');
});