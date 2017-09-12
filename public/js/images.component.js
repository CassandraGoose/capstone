angular
  .module('app')
  .controller("ImagesController", ImagesController)

function ImagesController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'
  vm.filters = "-popularity"

  vm.$onInit = function() {
    $http.get(BaseURL + '/images').then(function(response) {
      vm.uploaded_images = response.data
    })
  }

  //not sure this works below
  vm.toBackendCollection = function(image) {
    $http.post('/api/images/collect', {
        image: image,
        user_id: localStorage.id
      })
      .then(function(response) {})
  }

  vm.doSortThing = function(sortType, sortValue) {
    $http.get(`${BaseURL}/images/sort?sortType=${sortType}&sortValue=${sortValue}`)
      .then(function(data) {
        vm.uploaded_images = data.data;
      })
  }

}
