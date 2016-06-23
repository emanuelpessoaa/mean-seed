(function() {
  
  'use strict';

  angular
    .module('myApp.main', [
      'ui.router',
      'myApp.main.Controllers'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      
      $stateProvider
          .state('home', {               
              url  : '/',
              templateUrl: 'javascript/modules/main/views/index.html',
              controller: 'mainController as vm'
               
          })
      $urlRouterProvider.otherwise("/");
      
      $locationProvider.html5Mode(true);
  
  });

})();

