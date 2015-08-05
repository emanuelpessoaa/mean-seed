(function() {
  
  'use strict';

  angular
    .module('myApp.users', [
      'ngRoute',
      'myApp.users.Controllers',
      'myApp.users.Service'   
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/users', {
          templateUrl: 'javascript/modules/users/views/users.html',
          controller: 'UsersController'
        })
        .when('/users/create', {
          templateUrl: 'javascript/modules/users/views/create.html',
          controller: 'UserCreateController'
        })
        .when('/users/:id', {
          templateUrl: 'javascript/modules/users/views/get.html',
          controller: 'UsersGetController'
        })
        .when('/users/:id/edit', {
          templateUrl: 'javascript/modules/users/views/update.html',
          controller: 'UsersEditController'
        })
        .otherwise({
          redirectTo: '/users'
        });
    }])

})();
