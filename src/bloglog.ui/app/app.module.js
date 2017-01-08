'use strict';

(function () {

    angular.module('bloglog', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',

        'ui.bootstrap',
        'ui.router',

        'material.components.button',
        'material.components.dialog',
        'material.components.input',
        'material.components.content',
        'material.components.toolbar',
        'material.components.sidenav',
        'material.components.list',
        'material.components.fabToolbar',
        'material.components.icon',
        'material.components.chips'
    ]);

    angular.module("bloglog").config(["$httpProvider",
     function ($httpProvider) {

        $httpProvider.interceptors.push('httpInterceptorService');

    }]);

    angular.module("bloglog").run(
        ['$rootScope', '$cookies', 'COMMON',
            function ($rootScope, $cookies, COMMON) {
                $rootScope.Authorized = $cookies.get(COMMON.JWT_TOKEN);
                $rootScope.UserId = $cookies.get(COMMON.ID);
            }]);

})();
