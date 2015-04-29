angular.module('address.controllers', [])


.controller('AddressCtrl', function($scope,AppConfig, $ionicLoading,$location,$ionicHistory,AddressDatas,$stateParams,$cordovaEmailComposer) {
	$scope.style=AppConfig.Style;
	$scope.addressDatas = AddressDatas;
	$scope.pid = $stateParams.pid;
	$scope.title = title();
	
	$scope.sendEmail = function(email){
		var email = {
			    to: 'max@mustermann.de',
			    cc: 'erika@mustermann.de',
			    bcc: ['john@doe.com', 'jane@doe.com'],
			    attachments: [
			      'file://img/logo.png',
			      'res://icon.png',
			      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
			      'file://README.pdf'
			    ],
			    subject: 'Cordova Icons',
			    body: 'How are you? Nice greetings from Leipzig',
			    isHtml: true
			  };

			 $cordovaEmailComposer.open(email).then(null, function () {
			   // user cancelled email
			 });
	}
	
	$scope.call = function(number){
		window.plugins.CallNumber.callNumber(function(){
//			alert('success');
		}, function(){
//			alert('error');
		}, number);
	}
	
	function title(){
		for (var i = 0; i < AddressDatas.length; i++){
			if ($stateParams.id == AddressDatas[i].id){
				return AddressDatas[i].title;
			}
		}
		return "详细";
	}
	
	$scope.goBack=function(){
		if($location.url() == '/field/home/address/lists/0'){
			$location.path("/field/home/nav");
		}else{
			$ionicHistory.goBack();
		}
	}
	
})
;
