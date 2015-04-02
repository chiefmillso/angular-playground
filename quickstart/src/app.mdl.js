var myApp = angular.module('myApp', ['ngNewRouter', 'ngMaterial', 'myApp.home', 'myApp.films', 'myApp.navigation'])
  .controller('AppController', ['$router', AppController]);

myApp.config(['$componentLoaderProvider', function($componentLoaderProvider) {
  function dashCase(str) {
    return str.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });
  }

  $componentLoaderProvider.setTemplateMapping(function(name) {
    var dashName = dashCase(name);
    return './components/' + dashName + '/' + dashName + '.tpl.html';
  });

  $componentLoaderProvider.setCtrlNameMapping(function(name) {
    return name[0].toUpperCase() + name.substr(1) + 'Controller';
  });
}]);

myApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
});

function AppController($router) {

  $router.config([{
    path: '/',
    components: {
      navigation: 'navigation',
      main: 'home'
    }
  }, {
    path: '/films',
    components: {
      navigation: 'navigation',
      main: 'films'
    }
  }]);
}