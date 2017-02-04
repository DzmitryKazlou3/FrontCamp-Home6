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

        ///////////////////// load articles /////////////////////////////////
        function loadArticles() {
            
            articleService.getArticlesByFilter(vm.filterData, vm.currentPage, vm.pageSize)
                .then(result => {
                    vm.articles = result.data;
                    vm.pageCount = Math.ceil(result.count / vm.pageSize);
                })
                .catch(errorResult => {
                    if(errorResult.status == 401){
                        showAlert(
                            "Unauthorised...",
                            "Please 'Sign In' to see the list of articles.",
                            () => $state.go('home'));
                    } else{
                        alert(errorResult.message);
                    }
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
                        loadArticles();
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

        function buildToggler(navID) {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        
                    });
        }

        function navigateToItem(article){
            $state.go('articleDetail', {id: article.id});
        }

        // shows alert dialog
        function showAlert(title, message, callback) {

            let alert = $mdDialog.alert({
                title: title,
                textContent: message,
                ok: 'OK'
            });

            $mdDialog
                .show( alert )
                .finally(function() {
                    alert = undefined;
                    callback();
                });

        }

    }
})();