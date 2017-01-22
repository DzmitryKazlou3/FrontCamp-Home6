'use strict';

(function () {

    angular.module("bloglog").config(["$stateProvider", "$urlRouterProvider",
     function ($stateProvider, $urlRouterProvider) {
         $stateProvider.state('home', { url: '', component: 'home' });
         $stateProvider.state('articles', { url: '/articles', component: 'articles' });
         $stateProvider.state('articleDetail', { url: '/articles/:id', component: 'articleDetail' });

         $urlRouterProvider.otherwise('');

    }]);

})();
