angular
  .module("app")
  .controller("AboutController", AboutController)

function AboutController($http, $stateParams, $state) {
  const vm = this
    //base urL?

  vm.$onInit = function() {
    console.log('about page');
  }
}
