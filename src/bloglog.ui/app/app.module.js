'use strict';

(function () {

    angular.module('bloglog', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        'ngCookies',
        'material.components.button'
    ]);

    angular.module("bloglog").config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptorService');
    }]);

})();
