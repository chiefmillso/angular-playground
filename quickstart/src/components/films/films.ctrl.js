angular.module('myApp.films', [])
  .controller('FilmsController', ['$http', function($http) {
    var _this = this;
    _this.items = [];

    $http.get('/src/assets/films.json')
      .success(function(data, status, headers, config) {
        for (var i = 0; i < data.length; i++) {
          _this.items.push({
            id: i,
            name: data[i],
            watched: false
          });
        }
      })
      .error(function(data, status, headers, config) {

      });

  }]);