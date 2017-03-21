(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'splash'
      }).state({
        name: 'images',
        url: '/images',
        component: 'images'
      }).state({
        name: 'collection',
        url: '/user/collection',
        component: 'collection'
      }).state({
        name: 'upload',
        url: '/upload',
        component: 'upload'
      }).state({
        name: 'about',
        url: '/about',
        component: 'about'
      }).state({
        name: 'register',
        url: '/register',
        component: 'register'
      }).state({
        name: 'login',
        url: '/login',
        component: 'login'
      }).state({
        name: 'logout',
        url: '/logout',
        component: 'logout'
      })
    $urlRouterProvider.otherwise('/')
  }
}());
