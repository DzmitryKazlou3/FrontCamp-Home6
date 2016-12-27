'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$document','articleService', 'EVENTS', '$rootScope', '$uibModal'];

    function HomeController($document, articleService, EVENTS, $rootScope, $uibModal) {

        let vm = this;

        vm.articles = [];
        vm.totalItemsCount = 0;
        vm.signup = signup;

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

        function signup(selector) {
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
    }
})();