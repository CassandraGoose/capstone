(function() {
  angular
  angular.module('app', ['angularMoment', 'ui.router'])
    .component('splash', {
      templateUrl: '/splash.html',
      controller: "SplashController"
    })
    .component('images', {
      // bindings: { omg whatever
      //   thing: ''
      // },
      templateUrl: '/images.html',
      controller: "ImagesController"
    })


}())
