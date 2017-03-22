angular
  .module('app')
  .controller("ImagesController", ImagesController)

function ImagesController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'
  vm.toBackendCollection = toBackendCollection
  vm.filters = "-popularity"

  vm.$onInit = function() {
    $http.get(BaseURL + '/images').then(function(response) {
      vm.uploaded_images = response.data
      console.log(vm.uploaded_images)
    })
  }

//not sure this works below
  function toBackendCollection() {
    $http.post('/api/images/' + vm.uploaded_images.id, {
        imageID: vm.uploaded_images.id
      })
      .then(function(response) {
        res.send(response)
      })
  }



  vm.doSortThing = function(sortType, sortValue) {
    console.log(`${BaseURL}/images/sort?sortType=${sortType}&sortValue=${sortValue}`);
    $http.get(`${BaseURL}/images/sort?sortType=${sortType}&sortValue=${sortValue}`)
      .then(function(data) {
        vm.uploaded_images = data.data;
      })
  }

  function plusePopularity(id) {


}
