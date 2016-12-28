'use strict';

(function () {

    angular.module('bloglog', [
        'ngTouch',
        'ngAnimate',
        'ui.bootstrap',
        'ngCookies'
    ]);

    angular.module("bloglog").config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptorService');
    }]);

})();
