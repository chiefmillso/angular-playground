angular.module('myApp.films', ['myApp.common.services'])
  .controller('FilmsController', ['$http', 'films.svc', function($http, filmsSvc) {
    var _this = this;
    _this.items = [];
    var result = filmsSvc;
    result.then(function(d) {
      _this.items = _this.items.concat(d);
    });
  }]);