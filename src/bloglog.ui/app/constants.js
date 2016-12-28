'use strict';

(function () {

    angular
        .module('bloglog')

        .constant('COMMON', {
            JWT_TOKEN: "Token.JWT"
        })

        .constant('STRINGS', {
            OK: "OK"
        })

        .constant('URLS', {
            BASE: window.location.href,
            ARTICLES: "api/articles",
            SIGNUP: "signup",
            LOGIN: "login"
        })
        
        .constant('EVENTS', {
            ARTICLE_ADDED: "Article_Added"
        });

})();