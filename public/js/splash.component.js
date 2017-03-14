angular
.module("app")
  .controller("SplashController", SplashController)

  function SplashController($http, $stateParams, $state) {
    const vm = this
      //base urL?

    vm.$onInit = function() {
      console.log('heyyyyyyybro');
    }
  }
