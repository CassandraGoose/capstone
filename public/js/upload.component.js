angular
  .module('app')
  .controller("UploadController", UploadController)

function UploadController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'

  vm.$onInit = function() {}
}
