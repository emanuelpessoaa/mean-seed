(function() {
  
  'use strict';

  angular
    .module('myApp.users', [
      'ui.router',
      'myApp.users.Controllers',
      'myApp.users.Service'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      
      $stateProvider
        .state('users', {
          url: "/users",
          templateUrl: "javascript/modules/users/views/users.html",
          controller: 'retrieveUsersController as vm'
        })
        .state('createUser', {
          url: "/users/create",
          templateUrl: "javascript/modules/users/views/create.html",
          controller: 'createUsersController'
        })
        .state('getUser', {
          url: "/users/:id",
          templateUrl: "javascript/modules/users/views/get.html",
          controller: 'getUsersController'
        })
        .state('editUser', {
          url: "/users/:id/edit",
          templateUrl: "javascript/modules/users/views/update.html",
          controller: 'editUsersController'
        });

      $urlRouterProvider.otherwise("/");
      $locationProvider.html5Mode(true);
      
        
    }]);

})();
