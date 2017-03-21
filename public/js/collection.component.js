angular
  .module('app')
  .controller("CollectionController", CollectionController)

function CollectionController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api/user'
//how do i do the thing with the user id here?
//maybe i pass into the function and make the get happen when login is successful instead of on init?
  vm.$onInit = function() {
    $http.get(BaseURL + '/collection').then(function(response) {
      vm.collected_images = response.data
      console.log(vm.collected_images)
    })
  }
}
