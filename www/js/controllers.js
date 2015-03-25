angular.module('budjee.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
	$scope.signIn = function(user) {
		console.log('Sign-In', user);

		if(user.username == "owen" && user.password == "pw")
		{
			$state.go('nav.home');
		}
	};
})

.controller('ForgotPWCtrl', function($scope) {
	$scope.recoverPW = function(user) {
		console.log('recoverPW', user);

		
	};
})

.controller('HomeCtrl', function($scope) {})

.controller('CalendarCtrl', function($scope) {})

.controller('TransactionsCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {})

.controller('TestCtrl', function($scope) {
	ionic.Platform.ready(function(){
		// will execute when device is ready, or immediately if the device is already ready.
	});

	$scope.deviceInformation = ionic.Platform.device();

	$scope.isWebView = ionic.Platform.isWebView();
	$scope.isIPad = ionic.Platform.isIPad();
	$scope.isIOS = ionic.Platform.isIOS();
	$scope.isAndroid = ionic.Platform.isAndroid();
	$scope.isWindowsPhone = ionic.Platform.isWindowsPhone();

	$scope.currentPlatform = ionic.Platform.platform();
	$scope.currentPlatformVersion = ionic.Platform.version();

	//ionic.Platform.exit(); // stops the app
})

// .controller('DashCtrl', function($scope) {})

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   }
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
;