angular.module('myApp.home', [])
  .controller('HomeController', function() {
    this.name = 'Pascal';

    this.changeName = function() {
      this.name = 'Christoph';
    }
  });