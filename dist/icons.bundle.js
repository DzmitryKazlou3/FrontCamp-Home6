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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ function(module, exports) {

module.exports = "../images/back.svg";

/***/ },

/***/ 45:
/***/ function(module, exports) {

module.exports = "../images/close.svg";

/***/ },

/***/ 46:
/***/ function(module, exports) {

module.exports = "../images/delete.svg";

/***/ },

/***/ 47:
/***/ function(module, exports) {

module.exports = "../images/edit.svg";

/***/ },

/***/ 48:
/***/ function(module, exports) {

module.exports = "../images/home.svg";

/***/ },

/***/ 49:
/***/ function(module, exports) {

module.exports = "../images/menu.svg";

/***/ },

/***/ 50:
/***/ function(module, exports) {

module.exports = "../images/new.svg";

/***/ },

/***/ 51:
/***/ function(module, exports) {

module.exports = "../images/rightAngle.svg";

/***/ },

/***/ 52:
/***/ function(module, exports) {

module.exports = "../images/search.svg";

/***/ },

/***/ 53:
/***/ function(module, exports) {

module.exports = "../images/background.jpg";

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(49);
__webpack_require__(46);
__webpack_require__(50);
__webpack_require__(47);
__webpack_require__(45);
__webpack_require__(48);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(44);
module.exports = __webpack_require__(53);


/***/ }

/******/ });
//# sourceMappingURL=icons.bundle.js.map