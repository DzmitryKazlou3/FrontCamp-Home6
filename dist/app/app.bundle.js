/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog', ['ngAnimate', 'ngCookies', 'ngMessages', 'ui.bootstrap', 'ui.router', 'material.components.button', 'material.components.dialog', 'material.components.input', 'material.components.content', 'material.components.toolbar', 'material.components.sidenav', 'material.components.list', 'material.components.fabToolbar', 'material.components.icon', 'material.components.chips', 'material.components.fabSpeedDial']);

    angular.module("bloglog").config(["$httpProvider", function ($httpProvider) {

        $httpProvider.interceptors.push('httpInterceptorService');
    }]);

    angular.module("bloglog").run(['$rootScope', '$cookies', 'COMMON', function ($rootScope, $cookies, COMMON) {
        $rootScope.Authorized = $cookies.get(COMMON.JWT_TOKEN);
        $rootScope.UserId = $cookies.get(COMMON.ID);
    }]);
})();

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

        angular.module("bloglog").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
                $stateProvider.state('home', { url: '', component: 'home' });
                $stateProvider.state('articles', { url: '/articles', component: 'articles' });
                $stateProvider.state('articleDetail', { url: '/articles/:id', component: 'articleDetail' });

                $urlRouterProvider.otherwise('');
        }]);
})();

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').component('articleDetail', {
        templateUrl: 'articleDetail.html',
        controller: 'ArticleDetailController',
        controllerAs: 'vm'
    });

    angular.module('bloglog').controller('ArticleDetailController', ArticleDetailController);

    ArticleDetailController.$inject = ['articleService', 'commentService', '$stateParams', '$state', '$mdDialog', '$rootScope', 'EVENTS'];

    function ArticleDetailController(articleService, commentService, $stateParams, $state, $mdDialog, $rootScope, EVENTS) {

        var vm = this;

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

        vm.home = function () {
            $state.go('home');
        };
        vm.goToArticles = function () {
            $state.go('articles');
        };

        if (!$rootScope.Authorized) {
            vm.home();
        } else {
            loadArticle();
            loadComments();
        }

        function loadArticle() {

            articleService.getArticleById(vm.id).then(function (result) {
                vm.article = result.data;
                vm.isMyArticle = $rootScope.UserId === vm.article.user.user_id;
            }).catch(function (error) {
                alert(error.message);
            });
        }

        function editArticle(article) {

            $mdDialog.show({
                controller: 'ArticleDialogController',
                controllerAs: 'vm',
                templateUrl: 'articleModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false,
                locals: {
                    existingArticle: article,
                    dialogTitle: "Edit Article..."
                }
            }).then(function (article) {

                articleService.updateArticle(article).then(function (result) {
                    vm.article = result.data;
                }).catch(function (error) {
                    alert(error.data);
                });
            }).catch(function () {
                console.log("cancel");
            });
        }

        function deleteArticle(article) {

            var confirmDialog = $mdDialog.confirm().title('Delete article...').textContent('Are you sure you want to delete the article?').ariaLabel('Delete article').ok('Yes').cancel('No');

            $mdDialog.show(confirmDialog).then(function () {

                articleService.deleteArticle(article).then(function (result) {
                    vm.goToArticles();
                }).catch(function (error) {
                    alert(error.message);
                });
            }).catch(function () {
                console.log('deleteing cancelled');
            });
        }

        function loadComments() {

            commentService.getComments(vm.id, vm.commentsCurrentPage, vm.commentsPageSize).then(function (result) {
                vm.comments = result.data;
            }).catch(function (error) {
                alert(error.message);
            });
        }

        function addComment(comment) {

            if (vm.comment.text && vm.comment.text.length > 0) {

                commentService.add(vm.id, vm.comment).then(function (result) {
                    vm.comment.text = "";
                    loadComments();
                }).catch(function (error) {
                    alert(error.message);
                });
            }
        }
    }
})();

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('ArticleDialogController', ArticleDialogController);

    ArticleDialogController.$inject = ['$scope', 'articleService', '$mdDialog', '$rootScope', 'EVENTS', 'existingArticle', 'dialogTitle'];

    function ArticleDialogController($scope, articleService, $mdDialog, $rootScope, EVENTS, existingArticle, dialogTitle) {

        var vm = this;

        vm.title = dialogTitle;
        vm.isEdit = !!existingArticle;
        vm.article = existingArticle ? angular.copy(existingArticle) : {};
        if (!existingArticle) {
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

        vm.ok = function (article) {
            $mdDialog.hide(article);
        };

        vm.cancel = function () {
            return $mdDialog.cancel();
        };

        function transformChip(chip) {
            var vmmv = vm;

            if (angular.isObject(chip)) {
                return chip;
            }

            var articleTags = vm.article.Tags;

            return chip;
        }

        function querySearch(query) {
            var results = query ? vm.tags.filter(createFilterFor(query)) : [];
            return results;
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(tag) {
                return tag.indexOf(lowercaseQuery) === 0;
            };
        }

        function findTagsByText(text) {}
    }
})();

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').component('articles', {
        templateUrl: 'articles.html',
        controller: 'ArticlesController',
        controllerAs: 'vm'
    });

    angular.module('bloglog').controller('ArticlesController', ArticlesController);

    ArticlesController.$inject = ['$scope', 'articleService', '$state', '$mdDialog', '$rootScope', 'EVENTS', '$mdMedia', '$mdSidenav'];

    function ArticlesController($scope, articleService, $state, $mdDialog, $rootScope, EVENTS, $mdMedia, $mdSidenav) {

        var vm = this;

        vm.articles = [];

        vm.addArticle = addArticle;
        vm.updateArticle = updateArticle;
        vm.deleteArticle = deleteArticle;
        vm.home = function () {
            $state.go('home');
        };
        vm.filterData = {};
        vm.pageSize = 10;
        vm.currentPage = 1;
        vm.pageCount = 1;
        vm.pageChanged = onPageChanged;
        vm.navigateToItem = navigateToItem;

        vm.toggleSearchPanel = buildToggler;

        $scope.$on(EVENTS.SEARCH, function (event, filterData) {
            vm.filterData = filterData;
            vm.currentPage = 1;
            loadArticles();
        });

        loadArticles();

        function loadArticles() {
            articleService.getArticlesByFilter(vm.filterData, vm.currentPage, vm.pageSize).then(function (result) {
                vm.articles = result.data;
                vm.pageCount = Math.ceil(result.count / vm.pageSize);
            }).catch(function (errorResult) {
                alert(errorResult.message);
            });
        }

        function addArticle() {
            $mdDialog.show({
                controller: 'ArticleDialogController',
                controllerAs: 'vm',
                templateUrl: 'articleModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false,
                locals: {
                    existingArticle: null,
                    dialogTitle: "Add Article..."
                }
            }).then(function (article) {

                articleService.addArticle(article).then(function (pageResult) {
                    debugger;
                }).catch(function (error) {
                    alert(error.data);
                });
            }).catch(function () {
                console.log("cancel");
            });
        }

        function onPageChanged() {
            loadArticles();
        }

        function updateArticle(article) {

            $mdDialog.show({
                controller: 'ArticleDialogController',
                controllerAs: 'vm',
                templateUrl: 'articleModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false,
                locals: {
                    existingArticle: null,
                    dialogTitle: "Update Article..."
                }
            }).then(function (article) {

                articleService.updateArticle(article).then(function (pageResult) {
                    debugger;
                }).catch(function (error) {
                    alert(error.data);
                });
            }).catch(function () {
                console.log("cancel");
            });
        }

        function deleteArticle(article) {
            articleService.deleteArticle(article).then(function (resulrt) {}).catch(function (error) {});
        }

        function buildToggler(navID) {
            $mdSidenav(navID).toggle().then(function () {});
        }

        function navigateToItem(article) {
            $state.go('articleDetail', { id: article.id });
        }
    }
})();

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').component('searchArticle', {
        templateUrl: 'searchArticle.html',
        controller: 'SearchArticlesController',
        controllerAs: 'vm'
    });

    angular.module('bloglog').controller('SearchArticlesController', SearchArticlesController);

    SearchArticlesController.$inject = ['$scope', 'articleService', 'tagService', '$state', '$mdDialog', '$rootScope', 'EVENTS', '$mdMedia', '$mdSidenav'];

    function SearchArticlesController($scope, articleService, tagService, $state, $mdDialog, $rootScope, EVENTS, $mdMedia, $mdSidenav) {

        var vm = this;

        vm.tags = [];
        vm.chips = {};
        vm.chips.transformChip = transformChip;
        vm.chips.autocompleteDemoRequireMatch = true;
        vm.chips.selectedTags = [];

        vm.findTagsByText = findTagsByText;
        vm.tagSearchText = "";

        vm.search = search;

        function transformChip(chip) {
            if (angular.isObject(chip)) {
                return chip;
            }

            return chip;
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(tag) {
                return tag.indexOf(lowercaseQuery) === 0;
            };
        }

        function findTagsByText(text) {
            return tagService.findTagsByText(text).then(function (result) {
                return result.data;
            }).catch(function (errorResult) {
                return alert(errorResult.message);
            });
        }

        function search() {
            var filterData = {};
            if (vm.tags && vm.tags.length > 0) {
                (function () {
                    var tagValues = [];
                    angular.forEach(vm.tags, function (tag) {
                        tagValues.push(tag.value);
                    });
                    filterData.tags = tagValues;
                })();
            }

            $scope.$emit(EVENTS.SEARCH, filterData);
        }
    }
})();

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').service('authService', authService);

    authService.$inject = ['$http', 'URLS', '$q'];

    function authService($http, URLS, $q) {
        return {
            createUser: createUser,
            logIn: logIn
        };

        function createUser(user) {

            return $http.post(URLS.BASE + URLS.SIGNUP, user).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }

        function logIn(user) {

            return $http.post(URLS.BASE + URLS.LOGIN, user).then(function (responce) {
                if (responce.data.success) {
                    return responce.data.data;
                }

                return $q.reject(responce.data);
            }).catch(function (error) {
                console.log(error.message);
                return $q.reject(error);
            });
        }
    }
})();

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('CreateUserDialogController', CreateUserDialogController);

    CreateUserDialogController.$inject = ['authService', '$rootScope', 'EVENTS', '$mdDialog'];

    function CreateUserDialogController(authService, $rootScope, EVENTS, $mdDialog) {

        var vm = this;

        vm.user = {};
        vm.user.name = "";
        vm.user.email = "";
        vm.user.password = "";

        vm.ok = ok;
        vm.cancel = cancel;

        function ok() {
            $mdDialog.hide(vm.user);
        }

        function cancel() {
            $mdDialog.cancel();
        };
    }
})();

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('LogInDialogController', LogInDialogController);

    LogInDialogController.$inject = ['authService', '$mdDialog', '$rootScope', 'EVENTS', '$cookies', 'COMMON'];

    function LogInDialogController(authService, $mdDialog, $rootScope, EVENTS, $cookies, COMMON) {

        var vm = this;

        vm.user = {};
        vm.user.email = "";
        vm.user.password = "";

        vm.ok = ok;
        vm.cancel = cancel;

        function ok() {
            $mdDialog.hide(vm.user);
        }

        function cancel() {
            $mdDialog.cancel();
        };
    }
})();

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('bloglog').directive('pagingControl', PagingDirective);

    PagingDirective.$inject = [];
    function PagingDirective() {
        return {
            restrict: 'EA',
            scope: {
                clPages: '=',
                clAlignModel: '=',
                clPageChanged: '&',
                clSteps: '=',
                clCurrentPage: '='
            },
            controller: PagingController,
            controllerAs: 'vm',
            template: ['<md-button class="md-icon-button md-raised md-warn" aria-label="First" ng-click="vm.gotoFirst()">{{ vm.first }}</md-button>', '<md-button class="md-icon-button md-raised" aria-label="Previous" ng-click="vm.gotoPrev()" ng-show="vm.index - 1 >= 0">&#8230;</md-button>', '<md-button class="md-icon-button md-raised" aria-label="Go to page {{i+1}}" ng-repeat="i in vm.stepInfo"', ' ng-click="vm.goto(vm.index + i)" ng-show="vm.page[vm.index + i]" ', ' ng-class="{\'md-primary\': vm.page[vm.index + i] == clCurrentPage}">', ' {{ vm.page[vm.index + i] }}', '</md-button>', '<md-button class="md-icon-button md-raised" aria-label="Next" ng-click="vm.gotoNext()" ng-show="vm.index + vm.clSteps < clPages">&#8230;</md-button>', '<md-button class="md-icon-button md-raised md-warn" aria-label="Last" ng-click="vm.gotoLast()">{{ vm.last }}</md-button>'].join('')
        };
    }

    PagingController.$inject = ['$scope'];
    function PagingController($scope) {
        var vm = this;

        vm.first = '<<';
        vm.last = '>>';

        vm.index = 0;

        vm.clSteps = $scope.clSteps;

        vm.goto = function (index) {
            $scope.clCurrentPage = vm.page[index];
        };

        vm.gotoPrev = function () {
            $scope.clCurrentPage = vm.index;
            vm.index -= vm.clSteps;
        };

        vm.gotoNext = function () {
            vm.index += vm.clSteps;
            $scope.clCurrentPage = vm.index + 1;
        };

        vm.gotoFirst = function () {
            vm.index = 0;
            $scope.clCurrentPage = 1;
        };

        vm.gotoLast = function () {
            vm.index = parseInt($scope.clPages / vm.clSteps) * vm.clSteps;
            vm.index === $scope.clPages ? vm.index = vm.index - vm.clSteps : '';
            $scope.clCurrentPage = $scope.clPages;
        };

        $scope.$watch('clCurrentPage', function (value) {
            vm.index = parseInt((value - 1) / vm.clSteps) * vm.clSteps;
            $scope.clPageChanged();
        });

        $scope.$watch('clPages', function () {
            vm.init();
        });

        vm.init = function () {
            vm.stepInfo = function () {
                var result = [];
                for (var i = 0; i < vm.clSteps; i++) {
                    result.push(i);
                }
                return result;
            }();

            vm.page = function () {
                var result = [];
                for (var i = 1; i <= $scope.clPages; i++) {
                    result.push(i);
                }
                return result;
            }();
        };
    };
})();

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').constant('COMMON', {
        JWT_TOKEN: "Token.JWT",
        ID: "Id"
    }).constant('STRINGS', {
        OK: "OK"
    }).constant('URLS', {
        BASE: window.location.origin + '/',
        API: "api/",
        ARTICLES: "api/articles/",
        TAGS: "api/tags/",
        SIGNUP: "signup/",
        LOGIN: "login/",
        COMMENTS: "comments/"
    }).constant('EVENTS', {
        ARTICLE_ADDED: "Article_Added",
        SEARCH: "SEARCH"
    });
})();

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').component('home', {
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
    });

    angular.module('bloglog').controller('HomeController', HomeController);

    HomeController.$inject = ['$document', '$state', 'authService', 'EVENTS', '$rootScope', '$uibModal', '$mdDialog', '$cookies', 'COMMON'];

    function HomeController($document, $state, authService, EVENTS, $rootScope, $uibModal, $mdDialog, $cookies, COMMON) {

        var vm = this;

        vm.signupDialog = signupDialog;
        vm.loginDialog = loginDialog;

        vm.logOut = function () {
            $cookies.remove(COMMON.JWT_TOKEN);
            $cookies.remove(COMMON.ID);
            $rootScope.Authorized = false;
            $rootScope.UserId = null;
        };

        vm.navigateTo = function (stateName) {
            $state.go(stateName);
        };

        function signupDialog() {

            $mdDialog.show({
                controller: 'CreateUserDialogController',
                controllerAs: 'vm',
                templateUrl: 'signupModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false }).then(function (user) {
                authService.createUser(user).then(function (pageResult) {
                    debugger;
                }).catch(function (error) {
                    alert(error.message);
                });
            }).catch(function () {});
        }

        function loginDialog() {

            $mdDialog.show({
                controller: 'LogInDialogController',
                controllerAs: 'vm',
                templateUrl: 'loginModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false }).then(function (user) {

                authService.logIn(user).then(function (JWTResult) {
                    if (!JWTResult.token) {
                        alert("JWTResult does not contains token");
                        return;
                    }
                    $cookies.put(COMMON.JWT_TOKEN, JWTResult.token);
                    $cookies.put(COMMON.ID, JWTResult.id);

                    $rootScope.Authorized = true;
                    $rootScope.UserId = JWTResult.id;
                }).catch(function (error) {
                    alert(error.message);
                });
            }).catch(function () {
                console.log("cancel");
            });
        }
    }
})();

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').service('articleService', articleService);

    articleService.$inject = ['$http', 'URLS', '$q'];

    function articleService($http, URLS, $q) {
        return {
            getRecentArticles: getRecentArticles,
            getArticlesByFilter: getArticlesByFilter,
            getArticleById: getArticleById,
            addArticle: addArticle,
            updateArticle: updateArticle,
            deleteArticle: deleteArticle
        };

        function getRecentArticles() {

            return $http.get(URLS.BASE + URLS.ARTICLES).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        };

        function getArticleById(id) {

            return $http.get(URLS.BASE + URLS.ARTICLES + id).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }

        function getArticlesByFilter(filterData, pageNumber, pageSize) {

            return $http.post(URLS.BASE + URLS.ARTICLES + pageNumber + "/" + pageSize, { filterData: filterData }).then(function (responce) {
                if (responce.data && responce.data.success) {
                    return responce.data.data;
                }
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }

        function addArticle(article) {

            return $http.post(URLS.BASE + URLS.ARTICLES, article).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }

        function updateArticle(article) {

            return $http.put(URLS.BASE + URLS.ARTICLES, article).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }

        function deleteArticle(article) {

            return $http.delete(URLS.BASE + URLS.ARTICLES + article.id).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }
    }
})();

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').service('commentService', commentService);

    commentService.$inject = ['$http', 'URLS', '$q'];

    function commentService($http, URLS, $q) {
        return {
            getComments: getComments,
            add: add
        };

        function getComments(article_id, pageNumber, pageSize) {

            return $http.get(URLS.BASE + URLS.ARTICLES + article_id + "/" + URLS.COMMENTS + pageNumber + '/' + pageSize).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        };

        function add(article_id, comment) {

            return $http.post(URLS.BASE + URLS.ARTICLES + article_id + "/" + URLS.COMMENTS + "add", comment).then(function (responce) {
                if (responce.data && responce.data.success) {
                    return responce.data;
                }

                return $q.reject(responce.data);
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }
    }
})();

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("bloglog").factory('httpInterceptorService', httpInterceptorService);

    httpInterceptorService.$inject = ['$q', '$location', '$injector', '$cookies', 'COMMON'];

    function httpInterceptorService($q, $location, $injector, $cookies, COMMON) {
        return {
            request: request,
            responseError: responseError
        };

        function request(config) {
            config.headers = config.headers || {};
            if (config.url.indexOf("api") > -1) {
                var token = $cookies.get(COMMON.JWT_TOKEN);
                if (token) {
                    config.headers.Authorization = token;
                } else {
                    console.log("You are not logged in. Please login to execute protected actions.");
                }
            }
            return config;
        }

        function responseError(responce) {
            if (responce.config.url.indexOf("api") > -1) {
                if (responce.status === 401) {
                    $cookies.remove(COMMON.JWT_TOKEN);
                }
            }

            return $q.reject(responce);
        }
    }
})();

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').service('tagService', tagService);

    tagService.$inject = ['$http', 'URLS', '$q'];

    function tagService($http, URLS, $q) {
        return {
            findTagsByText: findTagsByText
        };

        function findTagsByText(text) {

            return $http.get(URLS.BASE + URLS.TAGS + "?text=" + text).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        };
    }
})();

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(41);
__webpack_require__(40);
__webpack_require__(45);
__webpack_require__(43);
__webpack_require__(37);
__webpack_require__(46);
__webpack_require__(44);
__webpack_require__(42);
__webpack_require__(36);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(38);
module.exports = __webpack_require__(39);


/***/ }

/******/ });
//# sourceMappingURL=app.bundle.js.map