angular
  .module('app')
  .controller("CollectionController", CollectionController)

function CollectionController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'
  vm.filters = "-popularity"

  vm.$onInit = function() {
    $http.post('/api/user/collection', {
        user_id: localStorage.id
      })
      .then(function(response) {
        vm.collected_images = response.data
      })
  }

  vm.doSortThing2 = function(sortType, sortValue) {
    $http.get(`${BaseURL}/user/collection/sort?sortType=${sortType}&sortValue=${sortValue}`)
      .then(function(data) {
        vm.collected_images = data.data;
      })
  }

}
