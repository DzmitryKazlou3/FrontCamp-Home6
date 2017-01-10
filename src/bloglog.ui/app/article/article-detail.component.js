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

    ArticleDetailController.$inject = ['articleService', 'commentService', '$stateParams', '$mdDialog', '$rootScope', 'EVENTS'];

    function ArticleDetailController(articleService, commentService, $stateParams, $mdDialog, $rootScope, EVENTS) {

        let vm = this;

        vm.article = {};
        vm.id = $stateParams.id;
        
        vm.comments = [];
        vm.commentsCurrentPage = 1;
        vm.commentsPageCount = 1;
        vm.commentsPageSize = 10;

        vm.updateArticle = updateArticle;
        vm.deleteArticle = deleteArticle;
        
        loadArticle();
        loadComments();

        ///////////////////// load articles /////////////////////////////////
        function loadArticle() {

            articleService.getArticleById(vm.id)
                .then((result) => {
                    vm.article = result.data;
                })
                .catch((error) => {
                    alert(error.message);
                 });
        }

        function loadComments() {

            commentService.getComments(vm.id, vm.commentsCurrentPage, vm.commentsPageSize)
                .then((result) => {
                    // TODO: calculate page count
                    vm.comments = result.data;
                })
                .catch((error) => {
                    alert(error.message);
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