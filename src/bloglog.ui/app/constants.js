'use strict';

(function () {

    angular
        .module('bloglog')

        .constant('COMMON', {
            JWT_TOKEN: "Token.JWT",
            ID: "Id"
        })

        .constant('STRINGS', {
            OK: "OK"
        })

        .constant('URLS', {
            BASE: window.location.origin + '/',
            API: "api/",
            ARTICLES: "api/articles/",
            TAGS: "api/tags/",
            SIGNUP: "signup/",
            LOGIN: "login/",
            COMMENTS: "comments/"
        })
        
        .constant('EVENTS', {
            ARTICLE_ADDED: "Article_Added",
            SEARCH: "SEARCH"
        });

})();