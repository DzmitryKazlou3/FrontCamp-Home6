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

    ArticleDetailController.$inject = ['articleService', 'commentService', '$stateParams', '$state', '$mdDialog', '$rootScope', 'EVENTS'];

    function ArticleDetailController(articleService, commentService, $stateParams, $state, $mdDialog, $rootScope, EVENTS) {

        let vm = this;

        vm.article = {};
        vm.id = $stateParams.id;
        vm.isMyArticle = false;
        
        vm.comments = [];
        vm.comment = {};
        vm.commentsCurrentPage = 1;
        vm.commentsPageCount = 1;
        vm.commentsPageSize = 10;
        vm.addComment = addComment;
        
        vm.editArticle = editArticle;
        vm.deleteArticle = deleteArticle;

        vm.home = function(){ $state.go('home'); };
        vm.goToArticles = function(){ $state.go('articles'); };        
        
        if(!$rootScope.Authorized){
            vm.home();
        } else{
            loadArticle();
            loadComments();
        }

        ///////////////////// load articles /////////////////////////////////
        function loadArticle() {

            articleService.getArticleById(vm.id)
                .then((result) => {
                    vm.article = result;
                    vm.isMyArticle = $rootScope.UserId === vm.article.user.user_id;
                })
                .catch((error) => {
                    alert(error.message);
                 });
        }

        ////////////////////// update article ///////////////////
        function editArticle(article){

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
                    existingArticle: article,
                    dialogTitle: "Edit Article..."
                }
            })
            .then(function (article) {

                articleService.updateArticle(article)
                    .then((result) => {
                        vm.article = result.data;
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

            let confirmDialog = $mdDialog.confirm()
                .title('Delete article...')
                .textContent('Are you sure you want to delete the article?')
                .ariaLabel('Delete article')
                .ok('Yes')
                .cancel('No');

            $mdDialog.show(confirmDialog)
                .then(function () {

                    articleService.deleteArticle(article)
                        .then(result => {
                            vm.goToArticles();
                        })
                        .catch(error => {
                            alert(error.message);
                        });

                })
                .catch(() => {
                    console.log('deleteing cancelled');
                });
        }

        ////////////////////// loads comments ///////////////////
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

        function addComment(comment) {

            if (vm.comment.text && vm.comment.text.length > 0) {

                commentService.add(vm.id, vm.comment)
                    .then((result) => {
                        vm.comment.text = "";
                        loadComments();
                        // notify user about success
                    })
                    .catch((error) => {
                        alert(error.message);
                    });

            }
        }

    }
})();