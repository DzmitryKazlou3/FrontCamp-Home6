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
            BASE: window.location.href,
            API: "api/",
            ARTICLES: "api/articles/",
            SIGNUP: "signup/",
            LOGIN: "login/",
            COMMENTS: "comments/"
        })
        
        .constant('EVENTS', {
            ARTICLE_ADDED: "Article_Added"
        });

})();