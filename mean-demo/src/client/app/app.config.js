(function() {
  'use strict';

  angular
    .module('MeanApp')
    .config(config)
    .run(run)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
  run.$inject = ['$rootScope', '$location', 'Auth'];

  function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      });
  }

  function run($rootScope, $location, Auth) {
  
  }
})();