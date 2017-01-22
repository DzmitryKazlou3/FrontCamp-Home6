'use strict';

(function () {

    angular
        .module('bloglog')
        .service('articleService', articleService);

    articleService.$inject = ['$http', 'URLS', '$q', '$resource'];

    function articleService($http, URLS, $q, $resource) {

        // var Article = $resource('/user/:userId', {userId:'@id'});
        var Article = $resource(URLS.BASE + URLS.ARTICLES + '/:id', {id:'@id'});

        return {
            getRecentArticles: getRecentArticles,
            getArticlesByFilter: getArticlesByFilter,
            getArticleById: getArticleById,
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
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        };

        function getArticleById(id){
            
            return Article.get({id: id}).$promise
                .then((responce) => {
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });
        }

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

            // return $http.post(
            //     URLS.BASE + URLS.ARTICLES,
            //     article)
            Article.save(article).$promise
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