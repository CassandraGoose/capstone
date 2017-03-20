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
    .component('collection', {
      templateUrl: '/collection.html',
      controller: "CollectionController"
    })
    .component('upload', {
      templateUrl: '/upload.html',
      controller: "UploadController"
    })
    .component('about', {
      templateUrl: '/about.html',
      controller: "AboutController"
    })
    .component('register', {
      templateUrl: '/register.html',
      controller: "RegisterController"
    })
    .component('login', {
      templateUrl: '/login.html',
      controller: "LoginController"
    })
}())
