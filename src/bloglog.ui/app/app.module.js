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
        'material.components.toolbar'
    ]);

    // angular.module("bloglog").config(["$httpProvider",
    //  function ($httpProvider) {

    //     $httpProvider.interceptors.push('httpInterceptorService');

    // }]);

})();
