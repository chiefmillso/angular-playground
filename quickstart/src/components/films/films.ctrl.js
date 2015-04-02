angular.module('myApp.films', [])
  .controller('FilmsController', function() {
    this.films = [];

    this.films.push({
      id: 1,
      name: 'The Green Mile',
      watched: false
    });

    this.films.push({
      id: 2,
      name: 'The Shawshank Redemption',
      watched: true
    });

  });