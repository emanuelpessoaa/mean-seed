(function() {
  
  'use strict';

  angular
    .module('myApp.users.Controllers', [])
    .controller('UsersController', UsersController)
    .controller('UserCreateController', UserCreateController)
    .controller('UsersGetController', UsersGetController)
    .controller('UsersEditController', UsersEditController);

  function UsersController($scope, $http, UserService) {  

  };

  function UserCreateController($scope, $http, MovieService, $location) {      

  };

  function UsersGetController($scope, $http, $routeParams, MovieService) {

  };

  function UsersEditController($scope, $http, $routeParams, MovieService) {
    
  }

  UsersController.$inject = ['$scope', '$http', 'UserService'];
  UserCreateController.$inject = ['$scope', '$http', 'UserService', '$location']
  UsersGetController.$inject = ['$scope', '$http', '$routeParams', 'UserService']
  UsersEditController.$inject = ['$scope', '$http', '$routeParams', 'UserService'];

})();