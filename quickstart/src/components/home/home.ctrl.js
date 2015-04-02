angular.module('myApp.home', ['myApp.common.services'])
  .controller('HomeController', ['films.svc', function(filmsSvc) {
    var _this = this;
    this.suggestion = null;
    this.rawData = [];

    this.filter = function(d) {
      var film = _.chain(d).filter(function(item) {
          return item.watched === false;
        })
        .sortBy(function() {
          return _.random(0, d.length);
        })
        .first(1)
        .value();
      if (film.length === 1) {
        _this.suggestion = film[0];
      } else {
        _this.suggestion = null;
      }
    };

    this.markSeenIt = function() {
      _this.suggestion.watched = true;
      _this.filter(_this.rawData);
    };

    this.markNotInterested = function() {
      _this.filter(_this.rawData);
    };

    this.markJustWatchedIt = function() {
      _this.suggestion.watched = true;
      _this.filter(_this.rawData);
    };

    filmsSvc.then(function(data) {
      _this.rawData = data;
      _this.filter(data);
    });
  }]);