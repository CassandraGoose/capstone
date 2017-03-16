angular
  .module('app')
  .controller("ImagesController", ImagesController)

function ImagesController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'

  vm.$onInit = function() {
    $http.get(BaseURL + '/images').then(function(response) {
      vm.uploaded_images = response.data
      console.log(vm.uploaded_images)
    })
  }

  vm.doSortThing = function(sortType, sortValue) {
      $http.get(`${BaseURL}/images/sort?sortType=${sortType}&sortValue=${sortValue}`)
        .then(function(data) {
          vm.uploaded_images = data.data;
        })
    }
}
