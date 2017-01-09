'use strict';

(function () {

    angular
        .module('bloglog')
        .component('searchArticle', {
            templateUrl: 'searchArticle.html',
            controller: 'SearchArticlesController',
            controllerAs: 'vm'
        });

    angular
        .module('bloglog')
        .controller('SearchArticlesController', SearchArticlesController);

    SearchArticlesController.$inject = ['articleService', '$state', '$mdDialog', '$rootScope', 'EVENTS', '$mdMedia', '$mdSidenav'];

    function SearchArticlesController(articleService, $state, $mdDialog, $rootScope, EVENTS, $mdMedia, $mdSidenav) {

        let vm = this;

        vm.tags = [];
        vm.chips = {};
        vm.chips.transformChip = transformChip;
        vm.chips.querySearch = querySearch;
        vm.chips.autocompleteDemoRequireMatch = true;
        vm.chips.selectedTags = [];

        //////////////////////////////////////////////////////////////////////
        function transformChip(chip) {
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
                return chip;
            }

            // Otherwise, create a new one
            return chip;
        }

        /**
         * Search for tags.
         */
        function querySearch(query) {
            var results = query ? vm.tags.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(tag) {
                return (tag.indexOf(lowercaseQuery) === 0);
            };
        }

    }
})();