angular.module('devslate', [
  'devslate.services',
  'ui.router',
  'devslate.chatbox',
  'devslate.codebox',
  'devslate.splash',
  'devslate.toolbar',
  'devslate.user',
  'devslate.whiteboard',
  'devslate.filedrop'
])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('splash', {
        url: '/splash',
        templateUrl: 'app/splash/splash.html',
        controller: 'SplashCtrl'
      })
      .state('board', {
        url: '/board/:boardUrl',
        views: {
          'filedrop': {
            templateUrl: 'app/filedrop/filedrop.html',
            controller: 'FiledropCtrl'
          },
          'whiteboard': {
            templateUrl: 'app/whiteboard/whiteboard.html',
            controller: 'WhiteboardCtrl'
          },
          'codebox': {
            templateUrl: 'app/codebox/codebox.html',
            controller: 'CodeboxCtrl'
          },
          'chatbox': {
            templateUrl: 'app/chatbox/chatbox.html',
            controller: 'ChatboxCtrl'
          },
          'toolbar': {
            templateUrl: 'app/toolbar/toolbar.html',
            controller: 'ToolbarCtrl'
          }
        }
      })
      .state('userpage', {
        url: '/user',
        templateUrl: 'app/user/userpage.html',
        controller: 'UserCtrl'
      });
      $urlRouterProvider.otherwise('/splash');
  })

// Make sure the stateprovider routes get started up
.run(['$state', function ($state) {}]);
