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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog', ['ngTouch', 'ngAnimate', 'ui.bootstrap']);
})();

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('ArticleDialogController', ArticleDialogController);

    ArticleDialogController.$inject = ['articleService', '$rootScope', 'EVENTS'];

    function ArticleDialogController(articleService, $rootScope, EVENTS) {

        var vm = this;
        vm.save = save;
        vm.article = {};

        vm.article.user = {};
        vm.article.user.user_id = "some user id";
        vm.article.user.name = "some user name";

        function save() {

            articleService.addArticle(vm.article).then(function (pageResult) {
                cleanForm();
                $rootScope.$broadcast(EVENTS.ARTICLE_ADDED, {});
            }).catch(function (error) {
                alert(error.data);
            });
        }

        function cleanForm() {
            vm.article.title = "";
            vm.article.text = "";
            vm.article.tags = "";
        }
    }
})();

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').service('authService', authService);

    authService.$inject = ['$http', 'URLS', '$q'];

    function authService($http, URLS, $q) {
        return {
            createUser: createUser
        };

        function createUser(user) {

            return $http.post(URLS.BASE + URLS.SIGNUP, user).then(function (responce) {
                debugger;
                return responce.data;
            }).catch(function (error) {
                debugger;
                console.log(error);
                return $q.reject(error);
            });
        }
    }
})();

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('CreateUserDialogController', CreateUserDialogController);

    CreateUserDialogController.$inject = ['authService', '$uibModalInstance', '$rootScope', 'EVENTS'];

    function CreateUserDialogController(authService, $uibModalInstance, $rootScope, EVENTS) {

        var vm = this;

        vm.user = {};
        vm.user.name = "";
        vm.user.email = "";
        vm.user.password = "";

        vm.save = save;
        vm.cancel = cancel;

        function save() {

            authService.createUser(vm.user).then(function (pageResult) {
                debugger;
                $uibModalInstance.close();
            }).catch(function (error) {
                alert(error.data);
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').constant('STRINGS', {
        OK: "OK"
    }).constant('URLS', {
        BASE: window.location.href,
        ARTICLES: "api/articles",
        SIGNUP: "signup"
    }).constant('EVENTS', {
        ARTICLE_ADDED: "Article_Added"
    });
})();

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('HomeController', HomeController);

    HomeController.$inject = ['$document', 'articleService', 'EVENTS', '$rootScope', '$uibModal'];

    function HomeController($document, articleService, EVENTS, $rootScope, $uibModal) {

        var vm = this;

        vm.articles = [];
        vm.totalItemsCount = 0;
        vm.signup = signup;

        $rootScope.$on(EVENTS.ARTICLE_ADDED, function (event, data) {
            loadArticles();
        });

        function loadArticles() {
            articleService.getRecentArticles().then(function (pageResult) {
                vm.articles = pageResult.data;
                vm.totalItemsCount = pageResult.count;
            }).catch(function (error) {});
        }

        loadArticles();

        function signup(selector) {
            var parentElem = selector ? angular.element($document[0].querySelector(selector)) : undefined;

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
                    items: function items() {
                        return [];
                    }
                }
            }).result.then(function (selectedItem) {}, function () {});
        }
    }
})();

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').service('articleService', articleService);

    articleService.$inject = ['$http', 'URLS', '$q'];

    function articleService($http, URLS, $q) {
        var service = {
            getRecentArticles: getRecentArticles,
            addArticle: addArticle
        };

        function getRecentArticles() {

            return $http.get(URLS.BASE + URLS.ARTICLES).then(function (responce) {
                return responce.data.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        };

        function addArticle(article) {

            return $http.post(URLS.BASE + URLS.ARTICLES, article).then(function (responce) {
                debugger;
                return responce.data;
            }).catch(function (error) {
                console.log(error);
                return $q.reject(error);
            });
        }

        return service;
    }
})();

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(23);
__webpack_require__(25);
__webpack_require__(21);
__webpack_require__(24);
__webpack_require__(20);
module.exports = __webpack_require__(22);


/***/ }

/******/ });
//# sourceMappingURL=app.bundle.js.map