'use strict';

(function () {

    angular
        .module('bloglog')
        .service('articleService', articleService);

    articleService.$inject = ['$http', 'URLS', '$q'];

    function articleService($http, URLS, $q) {
        let service = {
            getRecentArticles: getRecentArticles,
            addArticle: addArticle,
            updateArticle: updateArticle,
            deleteArticle: deleteArticle
        };

        /*
        * get tags by value
        * not a strong equality. tag value should contain given parameter.
        */
        function getTagsContainsValue(value) {

            return $http.get(URLS.BASE + URLS.TAGS + "?value=" + value)
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
        // function addArticle(article) {

        //     return $http.post(
        //         URLS.BASE + URLS.ARTICLES,
        //         article)
        //         .then((responce) => {
        //             return responce.data;
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             return $q.reject(error);
        //         });

        // }

        /*
        * updates article
        */
        // function updateArticle(article) {

        //     return $http.put(
        //         URLS.BASE + URLS.ARTICLES,
        //         article)
        //         .then((responce) => {
        //             return responce.data;
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             return $q.reject(error);
        //         });

        // }

        /*
        * deletes article
        */
        // function deleteArticle(article) {

        //     return $http.delete(
        //         URLS.BASE + URLS.ARTICLES + article.id)
        //         .then((responce) => {
        //             return responce.data;
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             return $q.reject(error);
        //         });

        // }

        // return service;
    }
})();