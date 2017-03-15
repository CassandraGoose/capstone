angular
  .module('app')
  .controller("UploadController", UploadController)

function UploadController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'
  vm.uploadImage = uploadImage
  vm.$onInit = function() {
    vm.uploaded_images = []
  }


  function uploadImage() {
    $http.post(BaseURL + '/upload', {
        url: vm.uploaded_images.URL
      })
      .then(function(response) {
        vm.uploaded_images.push({
          URL: vm.uploaded_images.URL
        });
        delete vm.uploaded_images.URL;
      })
  }
}
