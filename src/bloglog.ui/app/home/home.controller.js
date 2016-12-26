'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['articleService', 'EVENTS', '$rootScope'];

    function HomeController(articleService, EVENTS, $rootScope) {

        let vm = this;

        vm.articles = [];
        vm.totalItemsCount = 0;

        $rootScope.$on(EVENTS.ARTICLE_ADDED, function (event, data) {
            loadArticles();
        });

        ///////////////////// load articles /////////////////////////////////
        function loadArticles() {
            articleService.getRecentArticles()
                .then((pageResult) => {
                    vm.articles = pageResult.data;
                    vm.totalItemsCount = pageResult.count;
                })
                .catch((error) => { });
        }

        loadArticles();
    }
})();