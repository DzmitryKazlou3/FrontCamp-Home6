'use strict';

(function () {

    angular
        .module('bloglog')
        .service('articleService', articleService);

    articleService.$inject = ['$http', 'URLS', '$q'];

    function articleService($http, URLS, $q) {
        let service = {
            getRecentArticles: getRecentArticles,
            addArticle: addArticle
        };

        function getRecentArticles() {

            return $http.get(URLS.BASE + URLS.ARTICLES)
                .then((responce) => {
                    return responce.data.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        };

        /*
        * adds article
        */
        function addArticle(article) {

            return $http.post(
                URLS.BASE + URLS.ARTICLES,
                article)
                .then((responce) => {
                    debugger;
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        }

        return service;
    }
})();