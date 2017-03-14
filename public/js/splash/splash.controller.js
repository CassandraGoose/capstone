(function() {
  'use strict';

  angular
    .module('app')
    .controller('SplashController', SplashController);

  function SplashController($http, $stateParams, $state) {
    const vm = this;

    vm.$onInit = function() {
      console.log('splash controller')
    }
  }
})();
