angular
  .module("app")
  .controller("RegisterController", RegisterController)

function RegisterController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api/auth'
  vm.register = register

  vm.$onInit = function() {
    console.log('register heyyyyyyybro');
  }

  function register() {
    $http.post(BaseURL + '/register', {
        password: vm.person.password,
        email: vm.person.email
      })
      .then(function(response) {
        console.log("cyril voice: hello!");
        vm.person.push({
          password: vm.person.password,
          email: vm.person.email
        });
        delete vm.person;
      })
  }
}