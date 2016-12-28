(function () {
    'use strict';

    angular
        .module("bloglog")
        .factory('httpInterceptorService', httpInterceptorService);

    httpInterceptorService.$inject = ['$q', '$location', '$injector', '$cookies', 'COMMON'];

    function httpInterceptorService($q, $location, $injector, $cookies, COMMON) {
        return {
            request: request,
            responseError: responseError
        };

        function request(config) {
            config.headers = config.headers || {};
            if (config.url.indexOf("api") > -1) {
                let token = $cookies.get(COMMON.JWT_TOKEN);
                if (token) {
                    config.headers.Authorization = token;
                } else {
                    console.log("You are not logged in. Please login to execute protected actions.");
                }
            }
            return config;
        }

        function responseError(responce) {
            if (responce.config.url.indexOf("api") > -1) {
                if (responce.status === 401) {
                    $cookies.remove(COMMON.JWT_TOKEN);
                    // let http = $injector.get('$http');
                    // let deferred = $q.defer();
                    // return http.get("")
                    //     .then(function(refreshTokenResponce) {
                            
                    //     })
                    //     .catch(function (error) {
                            
                    //     });
                }
            }

            return $q.reject(responce);
        }
    }
})();