angular
  .module("app")
  .controller("LoginController", LoginController)

function LoginController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api/auth'
  vm.login = login
  vm.redirectIfLoggedIn = redirectIfLoggedIn

  vm.$onInit = function() {
    redirectIfLoggedIn()
  }

  function redirectIfLoggedIn() {
    if (localStorage.id) {
      //howwwwww
      $state.go('images')
    }
  }

  function login() {
    $http.post(BaseURL + '/login', {
        password: vm.person.password,
        email: vm.person.email
      })
      .then(function(response) {
        localStorage.setItem('id', response.data.message)
        $state.go('images')
        delete vm.person;
      })
  }
}
