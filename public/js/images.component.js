angular
  .module('app')
  .controller("ImagesController", ImagesController)

function ImagesController($http, $stateParams, $state) {
  const vm = this
  const BaseURL = '/api'

  vm.$onInit = function() {
    $http.get(BaseURL + '/images').then(function(response) {
      vm.uploaded_images = response.data
      console.log(vm.uploaded_images)
    })

    vm.doColorThing = function(color) {
      console.log(`${BaseURL}/images/:${color}`);
      $http.get(`${BaseURL}/images/:${color}`)
        .then(function(data) {
          vm.uploaded_images = data.data;
        });
    }

    vm.doMoodThing = function(mood) {
      console.log(`${BaseURL}/images/:${mood}`);
      $http.get(`${BaseURL}/images/:${mood}`)
        .then(function(data) {
          vm.uploaded_images = data.data;
        });
    }
  }
}

//   vm.images = [{
//     image: "http://static1.squarespace.com/static/52f0510ce4b03e1f2f5401e1/52f3ed10e4b0bae912c18289/56128267e4b0e1ea7535e03f/1444053855371/?format=1000w"
//   }, {
//     image: "http://s4.wallippo.com/thumbs/100000/fullmetal-alchemist-lan-fan-0afdb3805152570bcf570cc69ef4815c.png"
//   }, ]
// }
// vm.postImage = function() {
//   vm.image.id = currentID
//   currentID += 1
//   vm.image.votes = 0
//   vm.image.date = new Date
//   vm.images.push(vm.image)
//   delete vm.image
// }
//
// vm.image.date = new Date
// vm.images.push(vm.image)
// delete vm.image
