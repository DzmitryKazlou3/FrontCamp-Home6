'use strict';

(function () {

    angular
        .module('bloglog')
        .service('articleService', articleService);

    articleService.$inject = ['$http', 'URLS', '$q'];

    function articleService($http, URLS, $q) {
        return {
            getRecentArticles: getRecentArticles,
            getArticlesByFilter: getArticlesByFilter,
            addArticle: addArticle,
            updateArticle: updateArticle,
            deleteArticle: deleteArticle
        };

        /*
        * get recent
        */
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
        * gets articles with filter
        */
        function getArticlesByFilter(filterData, pageNumber, pageSize) {

            return $http.post(
                URLS.BASE + URLS.ARTICLES + pageNumber + "/" + pageSize,
                { filterData: filterData })
                .then((responce) => {
                    if (responce.data && responce.data.success) {
                        return responce.data.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });
        }

        /*
        * adds article
        */
        function addArticle(article) {

            return $http.post(
                URLS.BASE + URLS.ARTICLES,
                article)
                .then((responce) => {
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        }

        /*
        * updates article
        */
        function updateArticle(article) {

            return $http.put(
                URLS.BASE + URLS.ARTICLES,
                article)
                .then((responce) => {
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        }

        /*
        * deletes article
        */
        function deleteArticle(article) {

            return $http.delete(
                URLS.BASE + URLS.ARTICLES + article.id)
                .then((responce) => {
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        }
    }
})();