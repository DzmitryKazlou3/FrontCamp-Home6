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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog', ['ngTouch', 'ngAnimate', 'ui.bootstrap', 'ngCookies']);

    angular.module("bloglog").config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptorService');
    }]);
})();

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('ArticleDialogController', ArticleDialogController);

    ArticleDialogController.$inject = ['articleService', '$uibModalInstance', '$rootScope', 'EVENTS'];

    function ArticleDialogController(articleService, $uibModalInstance, $rootScope, EVENTS) {

        var vm = this;

        vm.article = {};

        vm.save = save;
        vm.close = function () {
            $uibModalInstance.dismiss('cancel');
        };

        function save() {

            articleService.addArticle(vm.article).then(function (pageResult) {
                $rootScope.$broadcast(EVENTS.ARTICLE_ADDED, {});
                $uibModalInstance.close();
            }).catch(function (error) {
                alert(error.data);
            });
        }
    }
})();

/***/ },

/***/ 22:
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

                return $q.reject(responce.message);
            }).catch(function (error) {
                debugger;
                console.log(error);
                return $q.reject(error);
            });
        }
    }
})();

/***/ },

/***/ 23:
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

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('LogInDialogController', LogInDialogController);

    LogInDialogController.$inject = ['authService', '$uibModalInstance', '$rootScope', 'EVENTS', '$cookies', 'COMMON'];

    function LogInDialogController(authService, $uibModalInstance, $rootScope, EVENTS, $cookies, COMMON) {

        var vm = this;

        vm.user = {};
        vm.user.email = "";
        vm.user.password = "";

        vm.logIn = logIn;
        vm.cancel = cancel;

        function logIn() {

            authService.logIn(vm.user).then(function (JWTResult) {
                if (!JWTResult.token) {
                    alert("JWTResult does not contains token");
                    return;
                }
                $cookies.put(COMMON.JWT_TOKEN, JWTResult.token);
                $rootScope.Authorized = true;
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

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').constant('COMMON', {
        JWT_TOKEN: "Token.JWT"
    }).constant('STRINGS', {
        OK: "OK"
    }).constant('URLS', {
        BASE: window.location.href,
        ARTICLES: "api/articles",
        SIGNUP: "signup",
        LOGIN: "login"
    }).constant('EVENTS', {
        ARTICLE_ADDED: "Article_Added"
    });
})();

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

"use strict";


(function () {

    angular.module('bloglog').controller('HomeController', HomeController);

    HomeController.$inject = ['$document', 'articleService', 'EVENTS', '$rootScope', '$uibModal', '$cookies', 'COMMON'];

    function HomeController($document, articleService, EVENTS, $rootScope, $uibModal, $cookies, COMMON) {

        var vm = this;

        $rootScope.Authorized = $cookies.get(COMMON.JWT_TOKEN);
        vm.articles = [];
        vm.totalItemsCount = 0;
        vm.signupDialog = signupDialog;
        vm.loginDialog = loginDialog;
        vm.addArticle = addArticle;
        vm.logOut = function () {
            $cookies.remove(COMMON.JWT_TOKEN);
            $rootScope.Authorized = false;
        };

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

        function signupDialog(selector) {
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

        function loginDialog(selector) {

            var parentElem = selector ? angular.element($document[0].querySelector(selector)) : undefined;

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'loginModalContent.html',
                controller: 'LogInDialogController',
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

        function addArticle(selector) {
            var parentElem = selector ? angular.element($document[0].querySelector(selector)) : undefined;

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
                    items: function items() {
                        return [];
                    }
                }
            }).result.then(function (selectedItem) {}, function () {});
        }
    }
})();

/***/ },

/***/ 27:
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

/***/ 28:
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

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(25);
__webpack_require__(28);
__webpack_require__(27);
__webpack_require__(22);
__webpack_require__(26);
__webpack_require__(21);
__webpack_require__(23);
module.exports = __webpack_require__(24);


/***/ }

/******/ });
//# sourceMappingURL=app.bundle.js.map