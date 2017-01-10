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

    SearchArticlesController.$inject = ['$scope', 'articleService', 'tagService', '$state', '$mdDialog', '$rootScope', 'EVENTS', '$mdMedia', '$mdSidenav'];

    function SearchArticlesController($scope, articleService, tagService, $state, $mdDialog, $rootScope, EVENTS, $mdMedia, $mdSidenav) {

        let vm = this;

        vm.tags = [];
        vm.chips = {};
        vm.chips.transformChip = transformChip;
        vm.chips.autocompleteDemoRequireMatch = true;
        vm.chips.selectedTags = [];
        
        vm.findTagsByText = findTagsByText;        
        vm.tagSearchText = "";

        vm.search = search;

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
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(tag) {
                return (tag.indexOf(lowercaseQuery) === 0);
            };
        }

        function findTagsByText(text) {
            return tagService.findTagsByText(text)
                .then(result => { 
                    return result.data;
                })
                .catch(errorResult => alert(errorResult.message));
        }

        function search() {
            let filterData = {};
            if (vm.tags && vm.tags.length > 0) {
                let tagValues = [];
                angular.forEach(vm.tags, function(tag) {tagValues.push(tag.value)});
                filterData.tags = tagValues;
            }

            $scope.$emit(EVENTS.SEARCH, filterData);
        }

    }
})();