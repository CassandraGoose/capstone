angular
  .module("app")
  .controller("RegisterController", RegisterController)

function RegisterController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api/auth'
  vm.register = register

  vm.$onInit = function() {
    redirectIfLoggedIn()
  }

  function redirectIfLoggedIn() {
    if (localStorage.id) {
      //howwwwww
      $state.go('images')
    }
  }

  function register() {
    $http.post(BaseURL + '/register', {
        password: vm.person.password,
        email: vm.person.email
      })
      .then(function(response) {
        $state.go('login')

        delete vm.person;
      })
  }
}
