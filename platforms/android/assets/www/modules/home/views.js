field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home', {
    url: "/home",
    templateUrl: "modules/home/page.html",
    controller:'HomeCtrl'
  }) 
  .state('field.home.nav', {
	    url: "/nav",
	    templateUrl: "modules/home/nav.html",
	    controller:'HomeCtrl'
	  })
//  $urlRouterProvider.when('/','/subscribe/list');
});