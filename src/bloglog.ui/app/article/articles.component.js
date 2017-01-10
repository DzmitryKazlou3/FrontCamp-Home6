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

    ArticlesController.$inject = ['$scope', 'articleService', '$state', '$mdDialog', '$rootScope', 'EVENTS', '$mdMedia', '$mdSidenav'];

    function ArticlesController($scope, articleService, $state, $mdDialog, $rootScope, EVENTS, $mdMedia, $mdSidenav) {

        let vm = this;
        
        vm.articles = [];

        vm.addArticle = addArticle;
        vm.updateArticle = updateArticle;
        vm.deleteArticle = deleteArticle;
        vm.home = function(){ $state.go('home'); };
        vm.filterData = {};
        vm.pageSize = 10;
        vm.currentPage = 1;
        vm.pageCount = 1;
        vm.pageChanged = onPageChanged;
        vm.navigateToItem = navigateToItem;

        vm.toggleSearchPanel = buildToggler;

        $scope.$on(EVENTS.SEARCH, (event, filterData) => {
            vm.filterData = filterData;
            vm.currentPage = 1;
            loadArticles();
        });

        loadArticles();

        ///////////////////// load articles /////////////////////////////////
        function loadArticles() {
            articleService.getArticlesByFilter(vm.filterData, vm.currentPage, vm.pageSize)
                .then(result => {
                    vm.articles = result.data;
                    vm.pageCount = Math.ceil(result.count / vm.pageSize);
                })
                .catch(errorResult => {
                    alert(errorResult.message);
                });
        }

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

        function onPageChanged(){
            loadArticles();
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

        function buildToggler(navID) {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        
                    });
        }

        function navigateToItem(article){
            $state.go('articleDetail', {id: article.id});
        }

    }
})();