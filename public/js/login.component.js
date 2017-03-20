angular
  .module("app")
  .controller("LoginController", LoginController)

function LoginController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api/auth'
  vm.login = login

  vm.$onInit = function() {
    console.log('login heyyyyyyybro');
  }

  function login() {
    $http.post(BaseURL + '/login', {
        password: vm.person.password,
        email: vm.person.email
      })
      .then(function(response) {
        console.log("cyril voice: hello!");
        vm.people.push({
          password: vm.person.password,
          email: vm.person.email
        });
        delete vm.people;
      })
  }

}
