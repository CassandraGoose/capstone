(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'images',
        url: '/images',
        component: 'images'
      })
      .state({
        name: 'home',
        url: '/',
        component: 'splash'
      })

    $urlRouterProvider.otherwise('/');
  }
}());
