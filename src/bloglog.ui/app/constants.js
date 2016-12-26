'use strict';

(function () {

    angular
        .module('bloglog')

        .constant('STRINGS', {
            OK: "OK"
        })

        .constant('URLS', {
            BASE: window.location.href,
            ARTICLES: "api/articles"
        })
        
        .constant('EVENTS', {
            ARTICLE_ADDED: "Article_Added"
        });

})();