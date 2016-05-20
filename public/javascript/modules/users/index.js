(function() {
  
  'use strict';

  angular
    .module('myApp.users', [
      'ui.router',
      'myApp.users.Controllers',
      'myApp.users.Service'   
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      
      $stateProvider
        .state('retrieveUsers', {
          url: "/users",
          templateUrl: "javascript/modules/users/views/users.html",
          controller: 'retrieveUsersController'
        })
      $stateProvider
        .state('createUser', {
          url: "/users/create",
          templateUrl: "javascript/modules/users/views/create.html",
          controller: 'createUsersController'
        })
      $stateProvider
        .state('getUser', {
          url: "/users/:id",
          templateUrl: "javascript/modules/users/views/get.html",
          controller: 'getUsersController'
        })
      $stateProvider
        .state('editUser', {
          url: "/users/:id/edit",
          templateUrl: "javascript/modules/users/views/update.html",
          controller: 'editUsersController'
        })

      $urlRouterProvider.otherwise("/");
        
    }])

})();
