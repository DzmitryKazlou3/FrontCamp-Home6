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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },

/***/ 1:
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ },

/***/ 10:
/***/ function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ },

/***/ 11:
/***/ function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },

/***/ 12:
/***/ function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _login = __webpack_require__(22);

var _login2 = _interopRequireDefault(_login);

var _RaisedButton = __webpack_require__(10);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _getMuiTheme = __webpack_require__(12);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = __webpack_require__(25);

var _MuiThemeProvider = __webpack_require__(11);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactTapEventPlugin = __webpack_require__(26);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

var Main = function (_React$Component) {
    (0, _inherits3.default)(Main, _React$Component);

    function Main(props) {
        (0, _classCallCheck3.default)(this, Main);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));

        _this.signup = function () {

            console.log("signup");
            debugger;
            alert.bind(window, 'left');
        };

        _this.signup = _this.signup.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Main, [{
        key: 'render',
        value: function render() {

            var muiTheme = (0, _getMuiTheme2.default)({
                palette: {
                    primary1Color: _colors.deepOrange500
                }
            }, {
                avatar: {
                    borderColor: null
                },
                userAgent: 'all'
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _MuiThemeProvider2.default,
                    { muiTheme: muiTheme },
                    _react2.default.createElement(_RaisedButton2.default, { label: 'Sign Up', onClick: this.signup })
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            alert("left");
                        } },
                    'asdasd'
                )
            );
        }
    }]);
    return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ },

/***/ 17:
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(24);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(10);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(11);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(12);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function (_React$Component) {
	(0, _inherits3.default)(Auth, _React$Component);

	function Auth(props) {
		(0, _classCallCheck3.default)(this, Auth);
		return (0, _possibleConstructorReturn3.default)(this, (Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call(this, props));
	}

	(0, _createClass3.default)(Auth, [{
		key: 'login',
		value: function (_login) {
			function login() {
				return _login.apply(this, arguments);
			}

			login.toString = function () {
				return _login.toString();
			};

			return login;
		}(function () {
			alert(login);
		})
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				{ action: '', onSubmit: this.handleSubmit },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_MuiThemeProvider2.default,
						null,
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: 'login',
							errorText: ''
						})
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_MuiThemeProvider2.default,
						null,
						_react2.default.createElement(_TextField2.default, {
							floatingLabelText: 'Password',
							errorText: ''
						})
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_MuiThemeProvider2.default,
						null,
						_react2.default.createElement(_RaisedButton2.default, { label: 'Sign In', type: 'submit', onClick: 'login()' })
					)
				)
			);
		}
	}]);
	return Auth;
}(_react2.default.Component);

exports.default = Auth;

/***/ },

/***/ 24:
/***/ function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ },

/***/ 25:
/***/ function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ },

/***/ 26:
/***/ function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ },

/***/ 6:
/***/ function(module, exports) {

module.exports = require("react");

/***/ },

/***/ 7:
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },

/***/ 8:
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(17);

var _main = __webpack_require__(16);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(React.createElement(_main2.default, null), document.getElementById('root'));

/***/ },

/***/ 9:
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }

/******/ });
//# sourceMappingURL=reactmain.bundle.js.map