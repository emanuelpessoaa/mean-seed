(function() {
  
  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.controllers',
      'myApp.users'
    ])
    .config(function ($routeProvider, $locationProvider) {
    $routeProvider.
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

})();

