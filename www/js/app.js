// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/about');
  
  // Each tab has its own nav history stack:
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
  // setup an abstract state for the tabs directive
   .state('app.about',{
    url:'/about',
    views:{
      'menuContent':{
         templateUrl:'templates/about.html',
          controller:'AboutCtrl'
      }
    }
   
  })
   .state('app.contact',{
    url:'/contact',
    views:{
      'menuContent':{
        templateUrl:'templates/contact.html',
        controller:'ContactCtrl'
      }
    }
  })
    .state('app.inquire',{
    url:'/inquire',
     views:{
      'menuContent':{
        templateUrl:'templates/inquire.html',
        controller:'InquireCtrl'
      }
    }
  })
    //gallery
  .state('app.gallery',{
    url:'/gallery',
     views:{
      'menuContent':{
        templateUrl:'templates/gallery.html',
        controller:'GalleryCtrl'
         }
    }
  })
  .state('galleryPhotos',{
    url:'/gallery/:paramsId',
    templateUrl:'templates/gallery.html',
    controller:'GalleryCtrl'
  })
  .state('photo',{
    url:'/gallery/:paramsId/:id',
    templateUrl:'templates/gallery.html',
    controller:'GalleryCtrl'
  })
  .state('map',{
    url:'/map',
    views:{
      'menuContent':{
        templateUrl:'templates/map.html',
        controller:'MapCtrl'
     }
    }
  })

  ;
  // Each tab has its own nav history stack:
  


});
