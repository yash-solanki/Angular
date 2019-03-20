(function() {
  'use strict';

  angular
    .module('MeanApp')
    .controller('LoginController', LoginCtrl);

  LoginCtrl.$inject = ['$scope', 'Auth', '$state', '$window'];

  function LoginCtrl($scope, Auth, $state, $window) {

    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
          .then(function() {
            // Logged in, redirect to home
            $state.go('main');
          })
          .catch(function(err) {
            $scope.errors.other = err.message;
          });
      }
    };
  }

})();