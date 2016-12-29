'use strict';

(function () {

    angular.module('bloglog', [
        'ngTouch',
        'ngAnimate',
        'ui.bootstrap',
        'ngCookies',
        'ngMaterial'
    ]);

    angular.module("bloglog").config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptorService');
    }]);

})();
