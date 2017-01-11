'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('ArticleDialogController', ArticleDialogController);

    ArticleDialogController.$inject = ['$scope', 'articleService', '$mdDialog', '$rootScope', 'EVENTS', 'existingArticle', 'dialogTitle'];

    function ArticleDialogController($scope, articleService, $mdDialog, $rootScope, EVENTS, existingArticle, dialogTitle) {

        let vm = this;

        vm.title = dialogTitle;
        vm.isEdit = !!existingArticle;
        vm.article = existingArticle ? angular.copy(existingArticle) : {};
        if(!existingArticle) {
            vm.article.tags = [];
        }
        
        vm.chips = {};
        vm.tags = [];
        vm.tagSearchText = "";
        vm.chips.transformChip = transformChip;
        vm.chips.querySearch = querySearch;
        vm.chips.autocompleteDemoRequireMatch = false;
        vm.chips.selectedTags = [];
        vm.findTagsByText = findTagsByText;

        vm.ok = article => {
            $mdDialog.hide(article);
        }

        vm.cancel = () => $mdDialog.cancel();
        
        //////////////////////////////////////////////////////////////////////
        function transformChip(chip) {      
            let vmmv = vm;      
            // If it is an object, it's already a known chip
            if (angular.isObject(chip)) {
                return chip;
            }

            let articleTags = vm.article.Tags;
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

        function findTagsByText(text){

        }

    }
})();