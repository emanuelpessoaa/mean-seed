(function() {
  
  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'myApp.controllers',
      'myApp.users'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      
      $urlRouterProvider.otherwise("/");
      

    $locationProvider.html5Mode(true);
  });

})();

