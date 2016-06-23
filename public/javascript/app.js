(function() {
  
  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'myApp.users',
      'myApp.main'
      
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      

      $urlRouterProvider.otherwise("/");
      
      $locationProvider.html5Mode(true);
  
  });

})();

