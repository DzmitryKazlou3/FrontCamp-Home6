'use strict';

(function () {

    angular
        .module('bloglog')
        .service('commentService', commentService);

    commentService.$inject = ['$http', 'URLS', '$q'];

    function commentService($http, URLS, $q) {
        let service = {
            getComments: getComments,
            addArticle: addArticle
        };

        /*
        * Gets comments by article id
        */
        function getComments(article_id) {

            return $http.get(URLS.BASE + URLS.ARTICLES + article_id + "/" + URLS.COMMENTS)
                .then((responce) => {
                    return responce.data.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        };

        /*
        * adds comment
        */
        function add(article) {

            return $http.post(
                URLS.BASE + URLS.COMMENTS,
                article)
                .then((responce) => {
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