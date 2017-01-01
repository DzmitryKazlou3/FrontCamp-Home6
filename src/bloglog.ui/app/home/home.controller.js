'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$document','articleService', 'EVENTS', '$rootScope', '$uibModal', '$cookies', 'COMMON'];

    function HomeController($document, articleService, EVENTS, $rootScope, $uibModal, $cookies, COMMON) {

        let vm = this;

        $rootScope.Authorized = $cookies.get(COMMON.JWT_TOKEN);
        $rootScope.UserId = $cookies.get(COMMON.ID);

        vm.articles = [];
        vm.totalItemsCount = 0;
        vm.signupDialog = signupDialog;
        vm.loginDialog = loginDialog;
        vm.addArticle = addArticle;
        vm.updateArticle = updateArticle;
        vm.deleteArticle = deleteArticle;
        vm.logOut = function () {
            $cookies.remove(COMMON.JWT_TOKEN);
            $cookies.remove(COMMON.ID);
            $rootScope.Authorized = false;
            $rootScope.UserId = null;
        };

        $rootScope.$on(EVENTS.ARTICLE_ADDED, function (event, data) {
            loadArticles();
        });

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

        /////////////////////// sign up //////////////////////
        function signupDialog(selector) {
            var parentElem = selector ?
                angular.element($document[0].querySelector(selector)) : undefined;

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'signupModalContent.html',
                controller: 'CreateUserDialogController',
                controllerAs: 'vm',
                size: '',
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return [];
                    }
                }
            }).result.then(function (selectedItem) {
                
            }, function () {
                
            });
        }

        //////////////////////// log in //////////////////
        function loginDialog(selector) {

            var parentElem = selector ?
                angular.element($document[0].querySelector(selector)) : undefined;

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'loginModalContent.html',
                controller: 'LogInDialogController',
                controllerAs: 'vm',
                size: '',
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return [];
                    }
                }
            }).result.then(function (selectedItem) {

            }, function () {

            });

        }

        ////////////////////// add article /////////////////////
        function addArticle(selector){
                        var parentElem = selector ?
                angular.element($document[0].querySelector(selector)) : undefined;

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'articleModalContent.html',
                controller: 'ArticleDialogController',
                controllerAs: 'vm',
                size: '',
                appendTo: parentElem,
                resolve: {
                    existingArticle: null
                }
            }).result.then(function (selectedItem) {

            }, function () {

            });
        }

        ////////////////////// update article ///////////////////
        function updateArticle(selector, article){
                        var parentElem = selector ?
                angular.element($document[0].querySelector(selector)) : undefined;

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'articleModalContent.html',
                controller: 'ArticleDialogController',
                controllerAs: 'vm',
                size: '',
                appendTo: parentElem,
                resolve: {
                    existingArticle: function () {
                        return article;
                    }
                }
            }).result.then(function (selectedItem) {
                loadArticles();
            }, function () {

            });
        }

        ////////////////////// delete article ///////////////////
        function deleteArticle(selector, article){
            articleService.deleteArticle(article)
            .then(resulrt => {
                loadArticles();
            })
            .catch(error => {

            });
        }
    }
})();