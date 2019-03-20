(function() {
  'use strict';

  angular
    .module('MeanApp')
    .factory('Auth', Auth);

  Auth.$inject = ['$location', '$rootScope', '$http', '$q'];

  function Auth($location, $rootScope, $http, $q) {
   
     var authService = {
            login: login
        };

    return authService;
      /**
       * Authenticate user and 
       */

    function login(loginData) {
      var deferred = $q.defer(),
          path = '/users/login';
        $http.post(path, loginData).success(function(data){
            if(data.status == 200)
                deferred.resolve(data.data);
            else
                deferred.reject(data.error);
        }).error(function(error){
            if(error.status === 401) {
                deferred.reject('Unauthorized');
            }
            else {
                deferred.reject(error.Error);
            }
        });
        return deferred.promise;
    }
  }

})();