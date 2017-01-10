'use strict';

(function () {

    angular
        .module('bloglog')
        .component('articleDetail', {
            templateUrl: 'articleDetail.html',
            controller: 'ArticleDetailController',
            controllerAs: 'vm'
        });

    angular
        .module('bloglog')
        .controller('ArticleDetailController', ArticleDetailController);

    ArticleDetailController.$inject = ['articleService', '$mdDialog', '$rootScope', 'EVENTS'];

    function ArticleDetailController(articleService, $mdDialog, $rootScope, EVENTS) {

        let vm = this;

        vm.article = {};

        vm.updateArticle = updateArticle;
        vm.deleteArticle = deleteArticle;

        ///////////////////// load articles /////////////////////////////////
        function loadArticles() {
            articleService.getRecentArticles()
                .then((pageResult) => {
                    vm.articles = pageResult.data;
                    vm.totalItemsCount = pageResult.count;
                })
                .catch((error) => { });
        }

        loadArticles();

        ////////////////////// update article ///////////////////
        function updateArticle(article){

            $mdDialog.show({
                controller: 'ArticleDialogController',
                controllerAs: 'vm',
                templateUrl: 'articleModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false, // Only for -xs, -sm breakpoints.
                locals: {
                    existingArticle: null,
                    dialogTitle: "Update Article..."
                }
            })
            .then(function (article) {

                articleService.updateArticle(article)
                    .then((pageResult) => {
                        debugger;
                    })
                    .catch((error) => {
                        alert(error.data);
                    });

            })
            .catch(function () {
console.log("cancel");
            });

        }

        ////////////////////// delete article ///////////////////
        function deleteArticle(article) {
            articleService.deleteArticle(article)
                .then(resulrt => {
                })
                .catch(error => {

                });
        }

    }
})();