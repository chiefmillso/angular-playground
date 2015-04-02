angular.module('myApp.common.services', [])
  .factory('films.svc', ['$http', '$q', function($http, $q) {

    var deferred = $q.defer();
    $http.get('/src/assets/films.json')
      .success(function(data, status, headers, config) {
        var items = [];
        for (var i = 0; i < data.length; i++) {
          items.push({
            id: i,
            name: data[i],
            watched: false
          });
        };

        deferred.resolve(items);
      })
      .error(function(data, status, headers, config) {
        deferred.reject([]);
      });

    return deferred.promise;
  }]);