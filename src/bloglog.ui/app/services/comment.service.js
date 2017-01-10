'use strict';

(function () {

    angular
        .module('bloglog')
        .service('commentService', commentService);

    commentService.$inject = ['$http', 'URLS', '$q'];

    function commentService($http, URLS, $q) {
        return {
            getComments: getComments,
            add: add
        };

        /*
        * Gets comments by article id
        */
        function getComments(article_id, pageNumber, pageSize) {

            return $http.get(URLS.BASE + URLS.ARTICLES + article_id + "/" + URLS.COMMENTS + pageNumber + '/' + pageSize)
                .then((responce) => {
                    return responce.data;
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
    }
})();