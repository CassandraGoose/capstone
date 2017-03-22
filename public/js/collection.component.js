angular
  .module('app')
  .controller("CollectionController", CollectionController)

function CollectionController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'
    //how do i do the thing with the user id here?
  vm.$onInit = function() {
      $http.post('/api/user/collection', {
          user_id: localStorage.id
        })
        .then(function(response) {
          vm.collected_images = response.data
          console.log('backendusercollection function working')
        })
    }

}
