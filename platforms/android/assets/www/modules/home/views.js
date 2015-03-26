field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home', {
    url: "/home",
    templateUrl: "modules/home/page.html",
    controller:'HomeCtrl'
  })
//  $urlRouterProvider.when('/subscribe','/subscribe/list');
});