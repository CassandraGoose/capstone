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
        username: vm.person.username,
        password: vm.person.password
      })
      .then(function(response) {
        console.log("cyril voice: hello!");
        vm.person.push({
          username: vm.person.username,
          password: vm.person.password
        });
        delete vm.person;
      })
  }

}
