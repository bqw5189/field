// Field App

var field = angular.module('field', ['ionic',
                                     'ngCordova',
                                     'login.controllers',
                                     'home.controllers',
                                     'settings.controllers',
                                     'backlog.controllers',
                                     'address.controllers',
                                     'report.controllers'
                                     ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) { 
	$stateProvider
    .state('field', {
	    url: "/field",
	    templateUrl: "index.html"
	  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/field/login');

});
