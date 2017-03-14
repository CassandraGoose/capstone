(function() {

  angular.module('app', ['ui.router'])
    .component('splash', {
      templateUrl: '/splash.html',
      controller: "SplashController"
    })
    .component('images', {
      templateUrl: '/images.html',
      controller: "ImagesController"
    })
}())
