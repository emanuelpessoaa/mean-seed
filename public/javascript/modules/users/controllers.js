(function() {
  
  'use strict';

  angular
    .module('myApp.users.Controllers', [])
    .controller('retrieveUsersController', retrieveUsersController)
    .controller('createUsersController', createUsersController)
    .controller('getUsersController', getUsersController)
    .controller('editUsersController', editUsersController);

  function retrieveUsersController($scope, $http, UserService) {  

  };

  function createUsersController($scope, $http, UserService, $location) {      

  };

  function getUsersController($scope, $http, $stateParams, UserService) {

  };

  function editUsersController($scope, $http, $stateParams, UserService) {
    
  }

  retrieveUsersController.$inject = ['$scope', '$http', 'UserService'];
  createUsersController.$inject = ['$scope', '$http', 'UserService', '$location']
  getUsersController.$inject = ['$scope', '$http', '$routeParams', 'UserService']
  editUsersController.$inject = ['$scope', '$http', '$routeParams', 'UserService'];

})();