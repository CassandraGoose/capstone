angular
  .module("app")
  .controller("LogoutController", LogoutController)

function LogoutController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api/auth'
  vm.logout = logout

  vm.$onInit = function() {}

  function logout() {
    localStorage.clear()
    $http.get(BaseURL + '/logout')
      .then(response => {})
  }
}
