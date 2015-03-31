field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home.address', {
    url: "/address",
    templateUrl: "modules/address/page.html",
    controller:'AddressCtrl'
    	
  })
  .state('field.home.address.lists', {
	    url: "/lists/:pid",
	    templateUrl: "modules/address/lists.html",
	    controller:'AddressCtrl'
  })
  .state('field.home.address.detail', {
	    url: "/lists/:pid/:id",
	    templateUrl: "modules/address/detail.html",
	    controller:'AddressCtrl'
  })
;
  
});