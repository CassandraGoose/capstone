angular
  .module('app')
  .controller("UploadController", UploadController)


function UploadController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'
  vm.uploadImage = uploadImage
  vm.toBackend = toBackend
  vm.$onInit = function() {
    // vm.uploaded_images = []
  }

  function toBackend() {
    $http.post('/api/color/dothething', {
        imageURL: vm.uploaded_images.URL
      })
      .then(function(response) {
        uploadImage(response.data.tags[0].label)
      })
  }

  function uploadImage(img) {
    $http.post(BaseURL + '/upload', {
        url: vm.uploaded_images.URL,
        mood: vm.uploaded_images.mood,
        color: img,
        keyword: vm.uploaded_images.keyword,
        popularity: 0
      })
      .then(function(response) {
        console.log("cyril voice: hello!");
        $state.go('images')
      })
  }
}
