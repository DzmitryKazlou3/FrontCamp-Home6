'use strict';

(function () {

    angular
        .module('bloglog')
        .component('home', {
            templateUrl: 'home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });

    angular
        .module('bloglog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$document','articleService', 'authService', 'EVENTS', '$rootScope', '$uibModal', '$mdDialog', '$cookies', 'COMMON'];

    function HomeController($document, articleService, authService, EVENTS, $rootScope, $uibModal, $mdDialog, $cookies, COMMON) {

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
        function signupDialog() {

            $mdDialog.show({
                controller: 'CreateUserDialogController',
                controllerAs: 'vm',
                templateUrl: 'signupModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
            .then(function (user) {
                authService.createUser(user)
                .then((pageResult) => {
                    debugger;
                    // $uibModalInstance.close();
                })
                .catch((error) => {
                    alert(error.message);
                });
            })
            .catch(function () {

            });
        }

        //////////////////////// log in //////////////////
        function loginDialog() {

            $mdDialog.show({
                controller: 'LogInDialogController',
                controllerAs: 'vm',
                templateUrl: 'loginModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
            .then(function (user) {
console.log("ok");
                authService.logIn(user)
                    .then((JWTResult) => {
                        if(!JWTResult.token){
                            alert("JWTResult does not contains token");
                            return;
                        }
                        $cookies.put(COMMON.JWT_TOKEN, JWTResult.token);
                        $cookies.put(COMMON.ID, JWTResult.id);

                        $rootScope.Authorized = true;
                        $rootScope.UserId = JWTResult.id;
                    })
                    .catch((error) => {
                        alert(error.data);
                    });

            })
            .catch(function () {
console.log("cancel");
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