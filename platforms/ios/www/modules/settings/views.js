field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.settings', {
    url: "/settings",
    templateUrl: "modules/settings/page.html",
    controller:'SettingsCtrl'
    	
  })
  .state('field.settings.list', {
	    url: "/list",
	    templateUrl: "modules/settings/list.html",
	    controller:'SettingsCtrl'
  })
  .state('field.settings.about', {
	    url: "/about",
	    templateUrl: "modules/settings/about.html",
	    controller:'SettingsCtrl'
  })
;
  
});