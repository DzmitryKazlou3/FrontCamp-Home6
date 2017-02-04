(function () {
    'use strict';

    angular
        .module('bloglog')
        .directive('pagingControl', PagingDirective);

    PagingDirective.$inject = [];
    function PagingDirective() {
        return {
            restrict: 'EA',
            scope: {
                pages: '=',
                alignModel: '=',
                pageChanged: '&',
                steps: '=',
                currentPage: '='
            },
            controller: PagingController,
            controllerAs: 'vm',
            template: [
                '<md-button class="md-icon-button md-raised md-warn" aria-label="First" ng-click="vm.gotoFirst()">{{ vm.first }}</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Previous" ng-click="vm.gotoPrev()" ng-show="vm.index - 1 >= 0">&#8230;</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Go to page {{i+1}}" ng-repeat="i in vm.stepInfo"',
                ' ng-click="vm.goto(vm.index + i)" ng-show="vm.page[vm.index + i]" ',
                ' ng-class="{\'md-primary\': vm.page[vm.index + i] == currentPage}">',
                ' {{ vm.page[vm.index + i] }}',
                '</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Next" ng-click="vm.gotoNext()" ng-show="vm.index + vm.steps < pages">&#8230;</md-button>',
                '<md-button class="md-icon-button md-raised md-warn" aria-label="Last" ng-click="vm.gotoLast()">{{ vm.last }}</md-button>',
            ].join('')
        };
    }

    PagingController.$inject = ['$scope'];
    function PagingController($scope) {
        var vm = this;

        vm.first = '<<';
        vm.last = '>>';

        vm.index = 0;

        vm.steps = $scope.steps;

        vm.goto = function (index) {
            $scope.currentPage = vm.page[index];
        };

        vm.gotoPrev = function () {
            $scope.currentPage = vm.index;
            vm.index -= vm.steps;
        };

        vm.gotoNext = function () {
            vm.index += vm.steps;
            $scope.currentPage = vm.index + 1;
        };

        vm.gotoFirst = function () {
            vm.index = 0;
            $scope.currentPage = 1;
        };

        vm.gotoLast = function () {
            vm.index = parseInt($scope.pages / vm.steps) * vm.steps;
            vm.index === $scope.pages ? vm.index = vm.index - vm.steps : '';
            $scope.currentPage = $scope.pages;
        };

        $scope.$watch('currentPage', function (value) {
            vm.index = parseInt((value - 1) / vm.steps) * vm.steps;
            $scope.pageChanged();
        });

        $scope.$watch('pages', function () {
            vm.init();
        });

        vm.init = function () {
            vm.stepInfo = (function () {
                var result = [];
                for (var i = 0; i < vm.steps; i++) {
                    result.push(i)
                }
                return result;
            })();

            vm.page = (function () {
                var result = [];
                for (var i = 1; i <= $scope.pages; i++) {
                    result.push(i);
                }
                return result;
            })();

        };
    };


})();