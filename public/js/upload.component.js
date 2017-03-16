angular
  .module('app')
  .controller("UploadController", UploadController)

function UploadController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'
  vm.uploadImage = uploadImage
  vm.$onInit = function() {
    // vm.uploaded_images = []
  }


  function uploadImage() {
    $http.post(BaseURL + '/upload', {
        url: vm.uploaded_images.URL,
        mood: vm.uploaded_images.mood,
        color: vm.uploaded_images.color,
        keyword: vm.uploaded_images.keyword
      })
      .then(function(response) {
        console.log("cyril voice: hello!");
        vm.uploaded_images.push({
          URL: vm.uploaded_images.URL,
          mood: vm.uploaded_images.mood,
          color: vm.uploaded_images.color,
          keyword: vm.uploaded_images.keyword
        });
        delete vm.uploaded_images;
      })
  }
}
