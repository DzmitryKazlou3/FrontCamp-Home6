'use strict';

(function () {

    angular
        .module('bloglog')
        .service('tagService', tagService);

    tagService.$inject = ['$http', 'URLS', '$q'];

    function tagService($http, URLS, $q) {
        return {
            findTagsByText: findTagsByText
        };

        /*
        * get tags, which contain the given text.
        */
        function findTagsByText(text) {

            return $http.get(URLS.BASE + URLS.TAGS + "?text=" + text)
                .then((responce) => {
                    return responce.data;
                })
                .catch((error) => {
                    console.log(error);
                    return $q.reject(error);
                });

        };

    }
})();