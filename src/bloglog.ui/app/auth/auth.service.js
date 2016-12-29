'use strict';

(function () {

    angular
        .module('bloglog')
        .service('authService', authService);

    authService.$inject = ['$http', 'URLS', '$q'];

    function authService($http, URLS, $q) {
        return {
            createUser: createUser,
            logIn: logIn
        };

        function createUser(user){

            return $http.post(
                URLS.BASE + URLS.SIGNUP,
                user)
                .then((responce) => {
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        }

        function logIn(user) {

            return $http.post(
                URLS.BASE + URLS.LOGIN,
                user)
                .then((responce) => {
                    if(responce.data.success){
                        return responce.data.data;
                    }

                    return $q.reject(responce.message);
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        }
    }
})();