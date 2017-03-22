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
    console.log(localStorage)
    $http.post('/api/images/collect', {
        image: image,
        user_id: localStorage.id
      })
      .then(function(response) {
        console.log('backendcollection function working')
      })
  }

  vm.doSortThing = function(sortType, sortValue) {
    console.log(`${BaseURL}/images/sort?sortType=${sortType}&sortValue=${sortValue}`);
    $http.get(`${BaseURL}/images/sort?sortType=${sortType}&sortValue=${sortValue}`)
      .then(function(data) {
        vm.uploaded_images = data.data;
      })
  }

}
