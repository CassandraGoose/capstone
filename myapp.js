(function() {
  'use strict'

  angular.module("app", ['angularMoment'])

  .component('newPostForm', {

    controller: function() {
      const vm = this
      var currentID = 3

      vm.$onInit = function() {
        vm.images = [{
          image: "http://static1.squarespace.com/static/52f0510ce4b03e1f2f5401e1/52f3ed10e4b0bae912c18289/56128267e4b0e1ea7535e03f/1444053855371/?format=1000w"
        }, {
          image: "http://s4.wallippo.com/thumbs/100000/fullmetal-alchemist-lan-fan-0afdb3805152570bcf570cc69ef4815c.png"
        }, ]
      }
      vm.postImage = function() {
        vm.image.id = currentID
        currentID += 1
        vm.image.votes = 0
        vm.image.date = new Date
        vm.images.push(vm.image)
        delete vm.image
      }
    },

    template:
    //&& imageForm.submitted on ng-show is part of not showing until all done//
      `
      <div class="column-group">
          <form class="small-30 top-space ink-form">
              <div class="control-group">
                  <div class "append-button" role="search">
                      <input type="search" class="control" ng-model=$ctrl.search placeholder="Filter">
                      <button class="ink-button">Search</button>
                          <button class="ink-button">Mood</button>
                          <button class="ink-button">Color</button>
                          <button class="ink-button">Top</button>

                  </div>
              </div>
          </form>


          <div class="column-group top-space">
              <div class="xlarge-30 large-30 medium-50 small-100 tiny-100 align-center" ng-repeat="image in $ctrl.images | orderBy:$ctrl.filters | filter:$ctrl.search">
                  <div>
                      <img class="column ink-image" ng-src="{{image.image}}">
                  </div>
                  <div class="over-top">
                      <h4 class="media-heading">
                          {{image.votes}}
                      </h4>
                      <div>
                          <span am-time-ago="{{image.date}}"></span>
                      </div>
                  </div>
              </div>
          </div>

`
      // <select class="control" ng-model="$ctrl.filters">
      // <option value="-votes">Votes</option>
      // <option value="title">Title</option>
      // <option value="date">Date</option>
      // </select>
  })
}());
