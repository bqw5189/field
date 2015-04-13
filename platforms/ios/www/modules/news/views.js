field.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('field.home.news', {
    url: "/news",
    templateUrl: "modules/news/page.html",
    controller:'NewsCtrl'
    	
  })
  .state('field.home.news.lists', {
	    url: "/lists",
	    templateUrl: "modules/news/lists.html",
	    controller:'NewsCtrl'
  })
  .state('field.home.news.lists.news', {
	    url: "/news",
	    views: {
	    	'news-view': {
	    		templateUrl: "modules/news/lists-news.html",
    	        controller:'NewsCtrl'
    	      }
    	    }
  })
  .state('field.home.news.lists.inform', {
	    url: "/inform",
	    views: {
	    	'inform-view': {
	    		templateUrl: "modules/news/lists-inform.html",
  	        controller:'NewsCtrl'
  	      }
  	    }
})
.state('field.home.news.lists.announcement', {
    url: "/announcement",
    views: {
    	'announcement-view': {
    		templateUrl: "modules/news/lists-announcement.html",
	        controller:'NewsCtrl'
	      }
	    }
})
  .state('field.home.news.detail', {
	    url: "/lists/:id",
	    templateUrl: "modules/news/detail.html",
	    controller:'NewsCtrl'
  })
;
  
});