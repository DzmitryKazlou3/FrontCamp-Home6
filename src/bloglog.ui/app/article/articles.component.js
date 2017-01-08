'use strict';

(function () {

    angular
        .module('bloglog')
        .component('articles', {
            templateUrl: 'articles.html',
            controller: 'ArticlesController',
            controllerAs: 'vm'
        });

    angular
        .module('bloglog')
        .controller('ArticlesController', ArticlesController);

    ArticlesController.$inject = ['articleService', '$state', '$mdDialog', '$rootScope', 'EVENTS', '$mdMedia'];

    function ArticlesController(articleService, $state, $mdDialog, $rootScope, EVENTS, $mdMedia) {

        let vm = this;
        
        vm.articles = [];
        vm.totalItemsCount = 0;

        vm.addArticle = addArticle;
        vm.updateArticle = updateArticle;
        vm.deleteArticle = deleteArticle;
        vm.home = function(){ $state.go('home'); };
        

        // vm.article = existingArticle ? existingArticle : {};

        // vm.save = save;        
        // vm.close = function () { $uibModalInstance.dismiss('cancel'); };

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

        ////////////////////// add article /////////////////////
        function addArticle(){
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
                    dialogTitle: "Add Article..."
                }
            })
            .then(function (article) {

                articleService.addArticle(article)
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