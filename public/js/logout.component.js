angular
  .module("app")
  .controller("LogoutController", LogoutController)

function LogoutController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api/auth'
  vm.logout = logout

  vm.$onInit = function() {
    console.log('loggin out of that shit');
  }

  function logout() {
    localStorage.clear()
    $http.get(BaseURL + '/logout')
      .then(response => {
        console.log(response);
      })
  }
}
