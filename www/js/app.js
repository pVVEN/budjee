// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('budjee', ['ionic', 'budjee.controllers', 'budjee.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('forgot-pw', {
    url: '/forgot-pw',
    templateUrl: 'templates/forgot-pw.html',
    controller: 'ForgotPWCtrl'
  })

  .state('nav', {
    //url: "/tab",
    abstract: true,
    templateUrl: "templates/nav.html"
  })

  // Each tab

  .state('nav.home', {
    url: '/home',
    views: {
      'nav-home': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('nav.calendar', {
    url: '/calendar',
    views: {
      'nav-calendar': {
        templateUrl: 'templates/calendar.html',
        controller: 'CalendarCtrl'
      }
    }
  })

  .state('nav.transactions', {
    url: '/transactions',
    views: {
      'nav-transactions': {
        templateUrl: 'templates/transactions.html',
        controller: 'TransactionsCtrl'
      }
    }
  })

  .state('nav.settings', {
    url: '/settings',
    views: {
      'nav-settings': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('nav.test', {
    url: '/test',
    views: {
      'nav-test': {
        templateUrl: 'templates/test.html',
        controller: 'TestCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
