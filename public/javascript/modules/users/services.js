(function() {

  'use strict';

  angular
    .module('myApp.users.Service', [])
    .service('UserService', UserService);


  function UserService($http) {
    var urlBase = 'http://localhost:3000/api/users';

    this.find = function() {
      return $http.get(urlBase);
    };

    this.findOne = function(id) {
        return $http.get(urlBase + '/' + id);
    };

    this.create = function(data) {
        return $http.post(urlBase, data);
    };

    this.update = function(data) {
        return $http.put(urlBase + '/' + data._id, data);
    };

    this.remove = function(data) {
        return $http.delete(urlBase + '/' + data._id, data);
    };
  }

  UserService.$inject = ['$http'];

  
})();

