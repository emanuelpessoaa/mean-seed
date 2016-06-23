(function() {
  
  'use strict';

  angular
    .module('myApp.main.Controllers',[
        'ui.router'
    ])
    .controller('mainController', mainController)

    
  function mainController($scope, $http, $location, $state) {  
    
    let vm = this;
    
    vm.title = "Main view";
    
  };


  mainController.$inject = ['$scope', '$http', '$location', '$state'];


})();