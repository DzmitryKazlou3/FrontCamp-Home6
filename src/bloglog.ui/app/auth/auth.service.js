'use strict';

(function () {

    angular
        .module('bloglog')
        .service('authService', authService);

    authService.$inject = ['$http', 'URLS', '$q'];

    function authService($http, URLS, $q) {
        return {
            createUser: createUser
        };

        function createUser(user){

            return $http.post(
                URLS.BASE + URLS.SIGNUP,
                user)
                .then((responce) => {
                    debugger;
                    return responce.data;
                })
                .catch((error) => {
                    debugger;
                    console.log(error);
                    return $q.reject(error);
                });
        }
    }
})();