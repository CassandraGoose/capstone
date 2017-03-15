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
        url: '/collection',
        component: 'collection'
      }).state({
        name: 'upload',
        url: '/upload',
        component: 'upload'
      })
    $urlRouterProvider.otherwise('/')
  }
}());
