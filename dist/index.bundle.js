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
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = function Result(data, success, message, code) {
  _classCallCheck(this, Result);

  this.data = data;
  this.success = success;
  this.message = message;
  this.code = code;
};

exports.default = Result;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResultCodes = function () {
    function ResultCodes() {
        _classCallCheck(this, ResultCodes);
    }

    _createClass(ResultCodes, null, [{
        key: 'Error',
        value: function Error() {
            return -1;
        }
    }, {
        key: 'Success',
        value: function Success() {
            return 0;
        }
    }, {
        key: 'InvalidObject',
        value: function InvalidObject() {
            return 1;
        }
    }, {
        key: 'ObjectNotFound',
        value: function ObjectNotFound() {
            return 2;
        }
    }, {
        key: 'ObjectExists',
        value: function ObjectExists() {
            return 3;
        }
    }, {
        key: 'Unathorized',
        value: function Unathorized() {
            return 4;
        }
    }, {
        key: 'InvalidArguments',
        value: function InvalidArguments() {
            return 5;
        }
    }]);

    return ResultCodes;
}();

exports.default = ResultCodes;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.muiTheme = undefined;

var _getMuiTheme = __webpack_require__(90);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = __webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var muiTheme = exports.muiTheme = (0, _getMuiTheme2.default)({
    palette: {
        primary1Color: _colors.cyan400
    }
}, {
    avatar: {
        borderColor: null
    },
    userAgent: 'all'
});

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commentService = exports.userService = exports.tagService = exports.articleService = undefined;

var _articleService = __webpack_require__(68);

var _articleService2 = _interopRequireDefault(_articleService);

var _tagService = __webpack_require__(70);

var _tagService2 = _interopRequireDefault(_tagService);

var _userService = __webpack_require__(71);

var _userService2 = _interopRequireDefault(_userService);

var _commentService = __webpack_require__(69);

var _commentService2 = _interopRequireDefault(_commentService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleService = new _articleService2.default();
var tagService = new _tagService2.default();
var userService = new _userService2.default();
var commentService = new _commentService2.default();

exports.articleService = articleService;
exports.tagService = tagService;
exports.userService = userService;
exports.commentService = commentService;

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRepository = exports.userRepository = exports.tagRepository = exports.articleRepository = undefined;

var _mongoose = __webpack_require__(9);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _articleRepository = __webpack_require__(64);

var _articleRepository2 = _interopRequireDefault(_articleRepository);

var _tagRepository = __webpack_require__(66);

var _tagRepository2 = _interopRequireDefault(_tagRepository);

var _userRepository = __webpack_require__(67);

var _userRepository2 = _interopRequireDefault(_userRepository);

var _commentRepository = __webpack_require__(65);

var _commentRepository2 = _interopRequireDefault(_commentRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect() {
  _mongoose2.default.Promise = global.Promise;

  _mongoose2.default.connect("mongodb://zlov:0429935@ds019488.mlab.com:19488/heroku_n0v8cmmh");
  return _mongoose2.default.connection;
};
connect();

var articleRepository = new _articleRepository2.default();
var tagRepository = new _tagRepository2.default();
var userRepository = new _userRepository2.default();
var commentRepository = new _commentRepository2.default();

exports.articleRepository = articleRepository;
exports.tagRepository = tagRepository;
exports.userRepository = userRepository;
exports.commentRepository = commentRepository;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArticleModel = function ArticleModel(id, title, text, description, tags, createDateTime, updateDateTime, user) {
  _classCallCheck(this, ArticleModel);

  this.id = id;
  this.title = title;
  this.text = text;
  this.description = description;
  this.tags = tags;
  this.createDateTime = createDateTime;
  this.updateDateTime = updateDateTime;
  this.user = user;
};

exports.default = ArticleModel;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentModel = function CommentModel(id, text, user, createDateTime, article_id) {
  _classCallCheck(this, CommentModel);

  this.id = id;
  this.text = text;
  this.user = user;
  this.createDateTime = createDateTime;
  this.article_id = article_id;
};

exports.default = CommentModel;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagModel = function TagModel(id, value, article_ids) {
  _classCallCheck(this, TagModel);

  this.id = id;
  this.value = value;
  this.article_ids = article_ids;
};

exports.default = TagModel;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModel = function UserModel(id, name, email, password) {
  _classCallCheck(this, UserModel);

  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
};

exports.default = UserModel;

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("passport");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("react-cookie");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageResult = function PageResult(data, count) {
  _classCallCheck(this, PageResult);

  this.data = data;
  this.count = count;
};

exports.default = PageResult;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.logOut = logOut;

var _reactCookie = __webpack_require__(16);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logOut() {
	_reactCookie2.default.remove("Id");
	_reactCookie2.default.remove("Token.JWT");
	window.location.href = window.location.href;
}

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("material-ui/List");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("ts-md5/dist/md5");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = {
	"port": 8080,
	"bodyLimit": "100kb",
	"corsHeaders": [
		"Link"
	]
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _articleRoutes = __webpack_require__(58);

var _articleRoutes2 = _interopRequireDefault(_articleRoutes);

var _tagsRoutes = __webpack_require__(59);

var _tagsRoutes2 = _interopRequireDefault(_tagsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/articles', _articleRoutes2.default);

router.use('/tags', _tagsRoutes2.default);

exports.default = router;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = __webpack_require__(91);

var _jwtSimple = __webpack_require__(88);

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

var _md = __webpack_require__(21);

var _bloglog = __webpack_require__(7);

var _userModel = __webpack_require__(14);

var _userModel2 = _interopRequireDefault(_userModel);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(app) {
    app.use(_passport2.default.initialize());

    var opts = {};
    opts.secretOrKey = "zlovzlovzlolovlll";
    opts.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeader();
    _passport2.default.use(new _passportJwt.Strategy(opts, function (jwt_payload, done) {

        _bloglog.userService.get(jwt_payload.email).then(function (result) {
            if (result.success) {
                var user = result.data;
                if (user) {
                    user.password = "";
                    return done(null, user);
                }

                return done(null, false, { message: 'invalid credentials' });
            }

            return done(null, false, { message: 'invalid credentials' });
        }).catch(function (error) {
            return done(error);
        });
    }));

    var cookieOpts = {};
    cookieOpts.secretOrKey = "zlovzlovzlolovlll";
    cookieOpts.jwtFromRequest = function (req) {
        var token = null;
        if (req && req.cookies) {
            token = req.cookies['Token.JWT'];
            if (token) {
                token = token.substring(4);
            }
        }
        return token;
    };
    _passport2.default.use("jwt-cookie", new _passportJwt.Strategy(cookieOpts, function (jwt_payload, done) {

        _bloglog.userService.get(jwt_payload.email).then(function (result) {
            if (result.success) {
                var user = result.data;
                if (user) {
                    user.password = "";
                    return done(null, user);
                }

                return done(null, false, { message: 'invalid credentials' });
            }

            return done(null, false, { message: 'invalid credentials' });
        }).catch(function (error) {
            return done(error);
        });
    }));

    app.post('/signup', function (req, res) {

        _bloglog.userService.get(req.body.email).then(function (result) {

            if (result.success) {
                return res.json(new _result2.default(null, false, "user exists", _resultCodes2.default.ObjectExists()));
            }
        }).catch(function (refuceResult) {

            if (refuceResult.code === _resultCodes2.default.ObjectNotFound()) {
                _bloglog.userService.add(new _userModel2.default(null, req.body.name, req.body.email, req.body.password)).then(function (result) {
                    return res.json(new _result2.default(null, true, "user was successfuly created", _resultCodes2.default.Success()));
                }).catch(function (result) {
                    return res.json(new _result2.default(null, false, "invalid credentials", _resultCodes2.default.InvalidObject()));
                });
            } else {
                return res.json(new _result2.default(refuceResult, false, "invalid credentials", _resultCodes2.default.Error()));
            }
        });
    });

    app.post('/login', function (req, res) {

        _bloglog.userService.get(req.body.email).then(function (result) {
            if (result.success) {
                var user = result.data;
                if (_bloglog.userService.checkPassword(user, req.body.password)) {
                    var token = _jwtSimple2.default.encode(user, opts.secretOrKey);

                    return res.json(new _result2.default({
                        id: user.id,
                        token: 'JWT ' + token
                    }, true, "success", _resultCodes2.default.Success()));
                }

                return res.json(new _result2.default(null, false, "invalid creadentials", _resultCodes2.default.Unathorized()));
            }

            return res.json(new _result2.default(null, false, "invalid creadentials", _resultCodes2.default.Unathorized()));
        }).catch(function (error) {
            return res.json(new _result2.default(error, false, "invalid creadentials", _resultCodes2.default.Unathorized()));
        });
    });
}

exports.default = { initialize: initialize };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(4);

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(92);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = __webpack_require__(93);

var _server2 = _interopRequireDefault(_server);

var _template = __webpack_require__(86);

var _template2 = _interopRequireDefault(_template);

var _main = __webpack_require__(83);

var _main2 = _interopRequireDefault(_main);

var _signupPage = __webpack_require__(85);

var _signupPage2 = _interopRequireDefault(_signupPage);

var _articlesPage = __webpack_require__(81);

var _articlesPage2 = _interopRequireDefault(_articlesPage);

var _articleDetailsPage = __webpack_require__(80);

var _articleDetailsPage2 = _interopRequireDefault(_articleDetailsPage);

var _newArticlePage = __webpack_require__(84);

var _newArticlePage2 = _interopRequireDefault(_newArticlePage);

var _editArticlePage = __webpack_require__(82);

var _editArticlePage2 = _interopRequireDefault(_editArticlePage);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

var _bloglog = __webpack_require__(7);

var _reactTapEventPlugin = __webpack_require__(94);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

(0, _reactTapEventPlugin2.default)();

router.get('/', function (req, res) {

    var html = _server2.default.renderToString(_react2.default.createElement(_main2.default, { isAuth: req.cookies.Id !== undefined }));
    res.send((0, _template2.default)({
        body: html,
        title: 'Blog Log',
        scriptDest: 'react/main.bundle.js'
    }));
});

router.get('/signup', function (req, res) {

    var html = _server2.default.renderToString(_react2.default.createElement(_signupPage2.default, null));
    res.send((0, _template2.default)({
        body: html,
        title: 'Blog Log',
        scriptDest: 'react/signup.bundle.js'
    }));
});

router.get('/articles/:id/edit', _passport2.default.authenticate('jwt-cookie', {
    session: false,
    failureRedirect: '/react'
}), function (req, res) {

    var article_id = req.params.id;
    var token = req.cookies['Token.JWT'];

    if (article_id) {

        _bloglog.articleService.getById(article_id).then(function (result) {

            var dataContext = {
                article: result.data,
                token: token
            };

            var html = _server2.default.renderToString(_react2.default.createElement(_editArticlePage2.default, { dataContext: dataContext }));
            res.send((0, _template2.default)({
                body: html,
                title: 'Blog Log',
                scriptDest: 'react/editArticle.bundle.js',
                data: {
                    article: result.data,
                    token: token
                }
            }));
        }).catch(function (errorResult) {
            return res.json(errorResult);
        });
    }
});

router.get('/articles/:pageNumber/:pageSize', function (req, res) {

    if (/^\d+$/.test(req.params.pageNumber) && /^\d+$/.test(req.params.pageNumber)) {

        var pageNumber = Number(req.params.pageNumber);
        var pageSize = Number(req.params.pageSize);

        _bloglog.articleService.get({}, (pageNumber - 1) * pageSize, pageSize).then(function (result) {

            var html = _server2.default.renderToString(_react2.default.createElement(_articlesPage2.default, { dataContext: result.data }));
            res.send((0, _template2.default)({
                body: html,
                title: 'Blog Log',
                scriptDest: 'react/articles.bundle.js',
                data: result.data
            }));
        }).catch(function (errorResult) {
            return res.send("Error occured. " + errorResult.message);
        });
    } else {
        next();
    }
});

router.get('/newarticle', _passport2.default.authenticate('jwt-cookie', { session: false }), function (req, res) {

    var dataContext = {
        isAuth: true,
        token: req.cookies['Token.JWT']
    };

    var html = _server2.default.renderToString(_react2.default.createElement(_newArticlePage2.default, { dataContext: dataContext }));
    res.send((0, _template2.default)({
        body: html,
        title: 'Blog Log',
        scriptDest: 'react/newArticle.bundle.js',
        data: dataContext
    }));
});

router.get('/articles/:id', _passport2.default.authenticate('jwt-cookie', {
    session: false,
    failureRedirect: '/react'
}), function (req, res) {

    var article_id = req.params.id;
    var token = req.cookies['Token.JWT'];

    if (article_id) {

        _bloglog.articleService.getById(article_id).then(function (result) {

            _bloglog.commentService.getCommentsByArticleId(article_id, 0, 10).then(function (resultComments) {

                var html = _server2.default.renderToString(_react2.default.createElement(_articleDetailsPage2.default, { article: result.data, comments: resultComments.data, token: token, user_id: req.user.id }));
                res.send((0, _template2.default)({
                    body: html,
                    title: 'Blog Log',
                    scriptDest: 'react/articleDetails.bundle.js',
                    data: {
                        article: result.data,
                        comments: resultComments.data,
                        token: token,
                        user_id: req.user.id
                    }
                }));
            }).catch(function (errorResult) {
                return res.send("Error occured. " + errorResult.message);
            });
        }).catch(function (errorResult) {
            return res.json(errorResult);
        });
    }
});

router.get('/articles', function (req, res) {

    var isAuth = req.cookies && req.cookies['Token.JWT'];

    _bloglog.articleService.get({}, 0, 10).then(function (result) {

        var dataContext = {
            articles: result.data.data,
            isAuth: isAuth,
            count: result.data.count
        };

        var html = _server2.default.renderToString(_react2.default.createElement(_articlesPage2.default, { dataContext: dataContext }));
        res.send((0, _template2.default)({
            body: html,
            title: 'Blog Log',
            scriptDest: 'react/articles.bundle.js',
            data: dataContext
        }));
    }).catch(function (errorResult) {
        return res.send("Error occured. " + errorResult.message);
    });
});

exports.default = router;

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(4);

__webpack_require__(87);

var router = (0, _express.Router)();

router.use('/', function (req, res) {
    res.render('./views/index.html');
});

exports.default = router;

/***/ },
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("ejs");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _bloglog = __webpack_require__(7);

var _articleModel = __webpack_require__(11);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _commentModel = __webpack_require__(12);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {

  _bloglog.articleService.getRecent().then(function (result) {
    res.json(result);
  }).catch(function (errorResult) {
    res.json(errorResult);
  });
});

router.get('/:id', function (req, res, next) {

  var article_id = req.params.id;
  _bloglog.articleService.getById(article_id).then(function (result) {
    res.json(result);
  }).catch(function (errorResult) {
    res.json(errorResult);
  });
});

router.post('/', _passport2.default.authenticate('jwt', { session: false }), function (req, res, next) {

  _bloglog.articleService.add(new _articleModel2.default(null, req.body.title, req.body.text, req.body.description, req.body.tags, Date.now(), Date.now(), {
    "user_id": req.user.id,
    "name": req.user.name
  })).then(function (result) {
    return res.json(result);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

router.post('/:pageNumber/:pageSize', _passport2.default.authenticate('jwt', { session: false }), function (req, res, next) {

  var pageNumber = Number(req.params.pageNumber);
  var pageSize = Number(req.params.pageSize);
  if (req.body.filterData) {
    _bloglog.articleService.get(req.body.filterData, (pageNumber - 1) * pageSize, pageSize).then(function (result) {
      return res.json(result);
    }).catch(function (errorResult) {
      return res.json(errorResult);
    });
  } else {
    res.json(new _result2.default(null, false, "The given filter data is invalid", _resultCodes2.default.InvalidArguments()));
  }
});

router.put('/', _passport2.default.authenticate('jwt', { session: false }), function (req, res, next) {

  _bloglog.articleService.update(new _articleModel2.default(req.body.id, req.body.title, req.body.text, req.body.description, req.body.tags, req.body.createDateTime, Date.now(), {
    "user_id": req.user.id,
    "name": req.user.name
  })).then(function (result) {
    return res.json(result);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

router.delete('/:id', _passport2.default.authenticate('jwt', { session: false }), function (req, res, next) {

  var article_id = req.params.id;
  _bloglog.articleService.delete(new _articleModel2.default(article_id, null, null, null, null, null, null, {
    "user_id": req.user.id,
    "name": req.user.name
  })).then(function (result) {
    return res.json(result);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

router.get('/:id/comments/:pageNumber/:pageSize', _passport2.default.authenticate('jwt', { session: false }), function (req, res, next) {

  var article_id = req.params.id;
  var pageNumber = Number(req.params.pageNumber);
  var pageSize = Number(req.params.pageSize);

  _bloglog.commentService.getCommentsByArticleId(article_id, (pageNumber - 1) * pageSize, pageSize).then(function (result) {
    return res.json(result);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

router.post('/:id/comments/add', _passport2.default.authenticate('jwt', { session: false }), function (req, res, next) {

  var article_id = req.params.id;
  _bloglog.commentService.add(new _commentModel2.default(null, req.body.text, {
    "user_id": req.user.id,
    "name": req.user.name
  }, Date.now(), article_id)).then(function (result) {
    return res.json(result);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

exports.default = router;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _bloglog = __webpack_require__(7);

var _tagModel = __webpack_require__(13);

var _tagModel2 = _interopRequireDefault(_tagModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
  _bloglog.tagService.getTagsByText(req.query.text).then(function (result) {
    res.json(result);
  }).catch(function (errorResult) {
    res.json(errorResult);
  });
});

exports.default = router;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(9);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleSchema = new _mongoose2.default.Schema({
    'title': {
        type: String,
        required: true
    },
    'text': {
        type: String,
        required: true
    },
    'description': {
        type: String,
        required: true
    },
    'tags': {
        type: Array,
        default: []
    },
    'createDateTime': {
        type: Date,
        default: Date.now()
    },
    'updateDateTime': {
        type: Date,
        default: Date.now()
    },
    'user': {
        'user_id': {
            type: _mongoose2.default.Schema.Types.ObjectId,
            required: true
        },
        'name': {
            type: String,
            required: true
        }
    }
});

exports.default = _mongoose2.default.model('articles', articleSchema);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(9);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentSchema = new _mongoose2.default.Schema({
    'article_id': {
        type: _mongoose2.default.Schema.Types.ObjectId,
        required: true
    },
    'text': {
        type: String,
        required: true
    },
    'createDateTime': {
        type: Date,
        default: Date.now()
    },
    'user': {
        'user_id': {
            type: _mongoose2.default.Schema.Types.ObjectId,
            required: true
        },
        'name': {
            type: String,
            required: true
        }
    }
});

exports.default = _mongoose2.default.model('comments', commentSchema);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(9);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tagSchema = new _mongoose2.default.Schema({
	'value': {
		type: String,
		required: true,
		unique: true
	},
	'articles': {
		type: Array,
		default: []
	}
});

exports.default = _mongoose2.default.model('tags', tagSchema);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(9);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
	'name': {
		type: String,
		required: true,
		unique: true
	},
	'email': {
		type: String,
		required: true,
		unique: true
	},
	'password': {
		type: String,
		required: true
	}
});

exports.default = _mongoose2.default.model('users', userSchema);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _articleDataModel = __webpack_require__(60);

var _articleDataModel2 = _interopRequireDefault(_articleDataModel);

var _articleModel = __webpack_require__(11);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(17);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArticleRepository = function () {
    function ArticleRepository() {
        _classCallCheck(this, ArticleRepository);
    }

    _createClass(ArticleRepository, [{
        key: 'get',
        value: function get(skip, count) {
            return new Promise(function (resolve, reject) {

                _articleDataModel2.default.find({}).sort('-createDateTime').skip(skip).limit(count).exec(function (err, articles) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!articles) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
                    } else {
                        (function () {
                            var articleModels = [];
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var article = _step.value;

                                    articleModels.push(MapToArticleModel(article));
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            _articleDataModel2.default.count(function (err, count) {
                                if (err) {
                                    reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                                }

                                resolve(new _result2.default(new _pageResult2.default(articleModels, count), true, "", _resultCodes2.default.Success()));
                            });
                        })();
                    }
                });
            });
        }
    }, {
        key: 'getByTagValue',
        value: function getByTagValue(filterData, skip, count) {

            var queryFilter = {};
            if (filterData.tags) {
                queryFilter["tags"] = { $all: filterData.tags };
            }

            return new Promise(function (resolve, reject) {

                _articleDataModel2.default.find(queryFilter).sort('-createDateTime').skip(skip).limit(count).exec(function (err, articles) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!articles) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
                    } else {
                        (function () {
                            var articleModels = [];
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {
                                for (var _iterator2 = articles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var article = _step2.value;

                                    articleModels.push(MapToArticleModel(article));
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }
                                } finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }

                            _articleDataModel2.default.count(queryFilter, function (err, count) {
                                if (err) {
                                    reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                                }

                                resolve(new _result2.default(new _pageResult2.default(articleModels, count), true, "", _resultCodes2.default.Success()));
                            });
                        })();
                    }
                });
            });
        }
    }, {
        key: 'getById',
        value: function getById(id) {
            return new Promise(function (resolve, reject) {

                _articleDataModel2.default.findOne({ '_id': id }).exec(function (err, article) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!article) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
                    } else {
                        resolve(new _result2.default(MapToArticleModel(article), true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }, {
        key: 'add',
        value: function add(articleModel) {
            return new Promise(function (resolve, reject) {

                _articleDataModel2.default.create(articleModel, function (err, articleCreatedDataModel) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!articleCreatedDataModel) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else {
                        resolve(new _result2.default(MapToArticleModel(articleCreatedDataModel), true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }, {
        key: 'update',
        value: function update(articleModel) {
            return new Promise(function (resolve, reject) {

                _articleDataModel2.default.findByIdAndUpdate(articleModel.id, {
                    title: articleModel.title,
                    text: articleModel.text,
                    description: articleModel.description,
                    tags: articleModel.tags
                }, { new: true }, function (err, updatedArticleDataModel) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    }

                    resolve(new _result2.default(MapToArticleModel(updatedArticleDataModel), true, "updated succesful", _resultCodes2.default.Success()));
                });
            });
        }
    }, {
        key: 'delete',
        value: function _delete(articleModel) {
            return new Promise(function (resolve, reject) {

                _articleDataModel2.default.findByIdAndRemove(articleModel.id, {}, function (err, deletedArticleDataModel) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    }

                    resolve(new _result2.default(null, true, "deleted succesful", _resultCodes2.default.Success()));
                });
            });
        }
    }]);

    return ArticleRepository;
}();

exports.default = ArticleRepository;
;

function MapToArticleModel(articleDataModel) {
    return new _articleModel2.default(articleDataModel._id, articleDataModel.title, articleDataModel.text, articleDataModel.description, articleDataModel.tags, articleDataModel.createDateTime, articleDataModel.updateDateTime, articleDataModel.user);
}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commentDataModel = __webpack_require__(61);

var _commentDataModel2 = _interopRequireDefault(_commentDataModel);

var _commentModel = __webpack_require__(12);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(17);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentRepository = function () {
    function CommentRepository() {
        _classCallCheck(this, CommentRepository);
    }

    _createClass(CommentRepository, [{
        key: 'getByArticleId',
        value: function getByArticleId(article_id, skip, count) {
            return new Promise(function (resolve, reject) {

                _commentDataModel2.default.find({ 'article_id': article_id }).sort('-createDateTime').skip(skip).limit(count).exec(function (err, comments) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!comments) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
                    } else {
                        var commentModels = [];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var comment = _step.value;

                                commentModels.push(MapToCommentModel(comment));
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        resolve(new _result2.default(commentModels, true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }, {
        key: 'add',
        value: function add(commentModel) {
            return new Promise(function (resolve, reject) {

                _commentDataModel2.default.create(commentModel, function (err, commentCreatedDataModel) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!commentCreatedDataModel) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else {
                        resolve(new _result2.default(MapToCommentModel(commentCreatedDataModel), true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }, {
        key: 'deleteForArticleId',
        value: function deleteForArticleId(article_id) {
            return new Promise(function (resolve, reject) {

                _commentDataModel2.default.find({ "article_id": article_id }).remove(function (err, commentCreatedDataModel) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!commentCreatedDataModel) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else {
                        resolve(new _result2.default(MapToCommentModel(commentCreatedDataModel), true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }]);

    return CommentRepository;
}();

exports.default = CommentRepository;


function MapToCommentModel(commentDataModel) {
    return new _commentModel2.default(commentDataModel._id, commentDataModel.text, commentDataModel.user, commentDataModel.createDateTime, commentDataModel.article_id);
}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tagDataModel = __webpack_require__(62);

var _tagDataModel2 = _interopRequireDefault(_tagDataModel);

var _tagModel = __webpack_require__(13);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagRepository = function () {
    function TagRepository() {
        _classCallCheck(this, TagRepository);
    }

    _createClass(TagRepository, [{
        key: 'getByValues',
        value: function getByValues(values) {

            return new Promise(function (resolve, reject) {
                _tagDataModel2.default.find({ value: { $in: values } }).exec(function (err, tags) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!tags) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
                    } else {
                        var tagModels = [];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var tag = _step.value;

                                tagModels.push(MapToTagModel(tag));
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        resolve(new _result2.default(tagModels, true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }, {
        key: 'getContainsText',
        value: function getContainsText(text) {

            return new Promise(function (resolve, reject) {
                _tagDataModel2.default.find({ value: { "$regex": text, "$options": "i" } }).exec(function (err, tags) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!tags) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
                    } else {
                        var tagModels = [];
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var tag = _step2.value;

                                tagModels.push(MapToTagModel(tag));
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        resolve(new _result2.default(tagModels, true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }, {
        key: 'getArticleIdsByTagIds',
        value: function getArticleIdsByTagIds(tagIds, skip, count) {
            return new Promise(function (resolve, reject) {

                _tagDataModel2.default.find({ _id: { "$in": tagIds } }).exec(function (err, tags) {
                    if (err) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
                    } else if (!tags) {
                        reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
                    } else {
                        var tagModels = [];
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = tags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var tag = _step3.value;

                                tagModels.push(MapToTagModel(tag));
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }

                        resolve(new _result2.default(tagModels, true, "", _resultCodes2.default.Success()));
                    }
                });
            });
        }
    }, {
        key: 'createOrUpdateByArticleId',
        value: function createOrUpdateByArticleId(articleId, tagValues) {
            return new Promise(function (resolve, reject) {

                var updates = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = tagValues[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var tagValue = _step4.value;

                        updates.push({
                            q: { value: tagValue },
                            u: { $set: { value: tagValue }, $addToSet: { articles: articleId } },
                            upsert: true });
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                _tagDataModel2.default.db.db.command({
                    update: "tags",
                    updates: updates,
                    ordered: true,
                    writeConcern: { w: "majority", wtimeout: 10000 }
                }).then(function (commandResult) {
                    return resolve(new _result2.default(commandResult.upserted, true, "Success", _resultCodes2.default.Success()));
                }).catch(function () {
                    return reject(new _result2.default(commandResult, false, update.writeErrors ? update.writeErrors.errmsg :  true ? update.writeConcernError.errmsg : "", _resultCodes2.default.Error()));
                });
            });
        }
    }, {
        key: 'add',
        value: function add(tag) {
            return _tagDataModel2.default.create(tag);
        }
    }]);

    return TagRepository;
}();

exports.default = TagRepository;
;

function MapToTagModel(tagDataModel) {
    return new _tagModel2.default(tagDataModel._id, tagDataModel.value, tagDataModel.articles_ids);
}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userDataModel = __webpack_require__(63);

var _userDataModel2 = _interopRequireDefault(_userDataModel);

var _userModel = __webpack_require__(14);

var _userModel2 = _interopRequireDefault(_userModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserRepository = function () {
  function UserRepository() {
    _classCallCheck(this, UserRepository);
  }

  _createClass(UserRepository, [{
    key: 'get',
    value: function get(email) {

      return new Promise(function (resolve, reject) {
        _userDataModel2.default.findOne({ "email": email }).exec(function (err, user) {
          if (err) {
            reject(new _result2.default(null, false, err, _resultCodes2.default.Error()));
          } else if (!user) {
            reject(new _result2.default(null, false, err, _resultCodes2.default.ObjectNotFound()));
          } else {
            resolve(new _result2.default(MapToUserModel(user), true, "", _resultCodes2.default.Success()));
          }
        });
      });
    }
  }, {
    key: 'add',
    value: function add(user) {
      return _userDataModel2.default.create(user);
    }
  }]);

  return UserRepository;
}();

exports.default = UserRepository;
;

function MapToUserModel(user) {
  return new _userModel2.default(user._id, user.name, user.email, user.password);
}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _articleModel = __webpack_require__(11);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _bloglog = __webpack_require__(10);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

var _bloglog2 = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArticleService = function () {
  function ArticleService() {
    _classCallCheck(this, ArticleService);
  }

  _createClass(ArticleService, [{
    key: 'getRecent',
    value: function getRecent() {
      return _bloglog.articleRepository.get(0, 10);
    }
  }, {
    key: 'get',
    value: function get(filterData, skip, count) {

      return new Promise(function (resolve, reject) {
        _bloglog.articleRepository.getByTagValue(filterData, skip, count).then(function (result) {
          resolve(result);
        }).catch(function (errorResult) {
          reject(errorResult);
        });
      });
    }
  }, {
    key: 'getById',
    value: function getById(id) {

      return new Promise(function (resolve, reject) {
        _bloglog.articleRepository.getById(id).then(function (result) {
          resolve(result);
        }).catch(function (errorResult) {
          reject(errorResult);
        });
      });
    }
  }, {
    key: 'add',
    value: function add(articleModel) {

      if (checkArticle(articleModel)) {
        return new Promise(function (resolve, reject) {

          _bloglog.articleRepository.add(articleModel).then(function (addArticleResult) {
            _bloglog2.tagService.createOrUpdateByArticleId(addArticleResult.data.id, articleModel.tags).then(function (result) {
              resolve(addArticleResult);
            }).catch(function (errorResult) {
              reject(errorResult);
            });
          }).catch(function (addArticleErrorResult) {
            return resolve(addArticleErrorResult);
          });
        });
      }

      return Promise.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }, {
    key: 'update',
    value: function update(articleModel) {
      if (!checkArticle(articleModel)) {
        return Promise.reject(new _result2.default(null, false, "The given article is not valid", _resultCodes2.default.InvalidObject()));
      }

      return new Promise(function (resolve, reject) {
        _bloglog.articleRepository.getById(articleModel.id).then(function (result) {

          if (result.success) {
            var articleFromStorage = result.data;

            if (articleFromStorage.user.user_id.equals(articleModel.user.user_id)) {

              articleFromStorage.title = articleModel.title;
              articleFromStorage.text = articleModel.text;
              articleFromStorage.description = articleModel.description;
              articleFromStorage.tags = articleModel.tags;


              _bloglog.articleRepository.update(articleModel).then(function (result) {
                resolve(result);
              }).catch(function (errorResult) {
                reject(errorResult);
              });
              return;
            }

            reject(new _result2.default(null, false, "Given article has wrong user_id. The article can't change the owner.", _resultCodes2.default.InvalidObject()));
          } else {
            reject(result);
          }
        }).catch(function (errorResult) {
          reject(errorResult);
        });
      });
    }
  }, {
    key: 'delete',
    value: function _delete(articleModel) {

      return new Promise(function (resolve, reject) {
        _bloglog.articleRepository.getById(articleModel.id).then(function (result) {

          if (result.success) {
            var articleFromStorage = result.data;

            if (articleFromStorage.user.user_id.equals(articleModel.user.user_id)) {
              _bloglog.commentRepository.deleteForArticleId(articleModel.id).then(function () {
                _bloglog.articleRepository.delete(articleModel).then(function (result) {
                  resolve(result);
                }).catch(function (errorResult) {
                  reject(errorResult);
                });
              }).catch(function (errorResult) {
                reject(errorResult);
              });

              return;
            }

            reject(new _result2.default(null, false, "Given article has wrong user_id. The article can't change the owner.", _resultCodes2.default.InvalidObject()));
          } else {
            reject(result);
          }
        }).catch(function (errorResult) {
          reject(errorResult);
        });
      });
    }
  }]);

  return ArticleService;
}();

exports.default = ArticleService;
;

function checkArticle(article) {
  if (!article.title || article.title.length === 0 || article.title.length > 150) {
    return false;
  }

  if (!article.description || article.description.length === 0 || article.description.length > 300) {
    return false;
  }

  if (!article.text || article.text.length === 0 || article.text.length > 20000) {
    return false;
  }

  if (!article.user || !article.user.user_id || !article.user.name) {
    return false;
  }

  return true;
}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commentModel = __webpack_require__(12);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _bloglog = __webpack_require__(10);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentService = function () {
  function CommentService() {
    _classCallCheck(this, CommentService);
  }

  _createClass(CommentService, [{
    key: 'getCommentsByArticleId',
    value: function getCommentsByArticleId(article_id, skip, count) {
      return _bloglog.commentRepository.getByArticleId(article_id, skip, count);
    }
  }, {
    key: 'add',
    value: function add(commentModel) {
      if (!checkComment(commentModel)) {
        return Promise.reject(new _result2.default(null, false, "The given comment is not valid", _resultCodes2.default.InvalidObject()));
      }

      return new Promise(function (resolve, reject) {

        _bloglog.articleRepository.getById(commentModel.article_id).then(function (result) {
          if (result.success) {
            _bloglog.commentRepository.add(commentModel).then(function (result) {
              if (result.success) {
                resolve(result);
              } else {
                reject(result);
              }
            }).catch(function (errorResult) {
              reject(errorResult);
            });
          } else {
            reject(result);
          }
        }).catch(function (errorResult) {
          reject(new _result2.default(null, false, errorResult.message, errorResult.code));
        });
      });
    }
  }]);

  return CommentService;
}();

exports.default = CommentService;

function checkComment(comment) {
  if (!comment.text || comment.text.length === 0 || comment.text.length > 5000) {
    return false;
  }

  if (!comment.user || !comment.user.user_id || !comment.user.name) {
    return false;
  }

  return true;
}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tagModel = __webpack_require__(13);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _bloglog = __webpack_require__(10);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagService = function () {
  function TagService() {
    _classCallCheck(this, TagService);
  }

  _createClass(TagService, [{
    key: 'getTagsByText',
    value: function getTagsByText(text) {
      return _bloglog.tagRepository.getContainsText(text);
    }
  }, {
    key: 'getArticleIdsByTagIds',
    value: function getArticleIdsByTagIds(tagIds, skip, count) {
      if (Array.isArray(tagIds)) {
        return _bloglog.tagRepository.getArticleIdsByTagIds(tagIds, skip, count);
      }

      return Promise.reject(new _result2.default(null, false, "Given tagIds is not Array", _resultCodes2.default.InvalidObject()));
    }
  }, {
    key: 'createOrUpdateByArticleId',
    value: function createOrUpdateByArticleId(articleId, tagValues) {
      if (Array.isArray(tagValues)) {
        return _bloglog.tagRepository.createOrUpdateByArticleId(articleId, tagValues);
      }

      return Promise.reject(new _result2.default(null, false, "Given tag values is not Array", _resultCodes2.default.InvalidObject()));
    }
  }, {
    key: 'add',
    value: function add(tagModel) {
      if (checkTag(tagModel)) {
        return new _bloglog.tagRepository.add(tagModel);
      }

      return Promise.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }]);

  return TagService;
}();

exports.default = TagService;
;

function checkTag(tag) {
  if (!tag.value || tag.value.length === 0 || tag.value.length > 50) {
    return false;
  }

  return true;
}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = __webpack_require__(21);

var _userModel = __webpack_require__(14);

var _userModel2 = _interopRequireDefault(_userModel);

var _bloglog = __webpack_require__(10);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, [{
    key: 'get',
    value: function get(email) {

      return _bloglog.userRepository.get(email);
    }
  }, {
    key: 'add',
    value: function add(userModel) {

      if (checkUser(userModel)) {
        userModel.password = _md.Md5.hashStr(userModel.password);
        return new _bloglog.userRepository.add(userModel);
      }

      return Promise.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }, {
    key: 'checkPassword',
    value: function checkPassword(user, password) {
      return user.password === _md.Md5.hashStr(password);
    }
  }]);

  return UserService;
}();

exports.default = UserService;
;

function checkUser(user) {
  if (!user.email || user.email.length === 0 || user.email.length > 100) {
    return false;
  }

  if (!user.name || user.name.length === 0 || user.name.length > 100) {
    return false;
  }

  if (!user.password || user.password.length === 0 || user.password.length > 100) {
    return false;
  }

  return true;
}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleDetail = function (_React$Component) {
	_inherits(ArticleDetail, _React$Component);

	function ArticleDetail(props) {
		_classCallCheck(this, ArticleDetail);

		return _possibleConstructorReturn(this, (ArticleDetail.__proto__ || Object.getPrototypeOf(ArticleDetail)).call(this, props));
	}

	_createClass(ArticleDetail, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					this.props.article.title
				),
				_react2.default.createElement(
					'div',
					null,
					this.props.article.tags
				),
				_react2.default.createElement(
					'div',
					null,
					this.props.article.text
				)
			);
		}
	}]);

	return ArticleDetail;
}(_react2.default.Component);

exports.default = ArticleDetail;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlesList = function (_React$Component) {
	_inherits(ArticlesList, _React$Component);

	function ArticlesList(props) {
		_classCallCheck(this, ArticlesList);

		return _possibleConstructorReturn(this, (ArticlesList.__proto__ || Object.getPrototypeOf(ArticlesList)).call(this, props));
	}

	_createClass(ArticlesList, [{
		key: 'selectArticle',
		value: function selectArticle(id) {
			window.location.href = window.location.href + '/' + id;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_List.List,
				null,
				this.props.articles.map(function (article, i) {
					return _react2.default.createElement(_List.ListItem, {
						key: i,
						primaryText: article.title,
						secondaryText: article.description,
						onTouchTap: _this2.selectArticle.bind(_this2, article.id) });
				})
			);
		}
	}]);

	return ArticlesList;
}(_react2.default.Component);

exports.default = ArticlesList;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_React$Component) {
    _inherits(Comments, _React$Component);

    function Comments(props) {
        _classCallCheck(this, Comments);

        return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, props));
    }

    _createClass(Comments, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _List.List,
                null,
                this.props.comments.map(function (comment, i) {
                    return _react2.default.createElement(_List.ListItem, {
                        key: i,
                        disabled: true,
                        primaryText: comment.user.name,
                        secondaryText: comment.text });
                })
            );
        }
    }]);

    return Comments;
}(_react2.default.Component);

exports.default = Comments;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(8);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Chip = __webpack_require__(19);

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditArticle = function (_React$Component) {
  _inherits(EditArticle, _React$Component);

  function EditArticle(props) {
    _classCallCheck(this, EditArticle);

    var _this = _possibleConstructorReturn(this, (EditArticle.__proto__ || Object.getPrototypeOf(EditArticle)).call(this, props));

    _this.state = {
      errors: {
        title: '',
        text: '',
        description: '',
        tags: ''
      },
      article: props.article
    };

    _this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    };

    _this.edit = _this.edit.bind(_this);
    _this.onChangeTitle = _this.onChangeTitle.bind(_this);
    _this.onChangeText = _this.onChangeText.bind(_this);
    _this.onChangeDescription = _this.onChangeDescription.bind(_this);
    return _this;
  }

  _createClass(EditArticle, [{
    key: 'onChangeTitle',
    value: function onChangeTitle(event) {
      this.state.article.title = event.target.value;
      this.setState(this.state.article);
    }
  }, {
    key: 'onChangeText',
    value: function onChangeText(event) {
      this.state.article.text = event.target.value;
      this.setState(this.state.article);
    }
  }, {
    key: 'onChangeDescription',
    value: function onChangeDescription(event) {
      this.state.article.description = event.target.value;
      this.setState(this.state.article);
    }
  }, {
    key: 'edit',
    value: function edit(event) {
      var _this2 = this;

      event.preventDefault();
      var article = {
        id: this.state.article.id,
        title: this.state.article.title,
        text: this.state.article.text,
        description: this.state.article.description,
        tags: this.props.article.tags
      };

      var xhr = new XMLHttpRequest();
      xhr.open('PUT', '/api/articles/');
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.setRequestHeader('Authorization', this.props.token);
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.response);
          if (xhr.response.success) {

            window.location.href = '/react/articles/' + _this2.state.article.id;
          } else {
            alert(xhr.response.message);
          }
        }
      });

      xhr.send(JSON.stringify(article));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { action: '', onSubmit: this.edit },
          _react2.default.createElement(
            'div',
            { className: 'toolBar' },
            _react2.default.createElement(_RaisedButton2.default, { label: 'Back', href: '/react/articles/' + this.state.article.id }),
            _react2.default.createElement(_RaisedButton2.default, { label: 'Apply changes', type: 'submit' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, {
              id: 'editArticle-title',
              fullWidth: true,
              floatingLabelText: 'Title',
              onChange: this.onChangeTitle,
              errorText: this.state.errors.title,
              value: this.state.article.title
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, {
              id: 'editArticle-description',
              fullWidth: true,
              floatingLabelText: 'Description',
              onChange: this.onChangeDescription,
              errorText: this.state.errors.description,
              value: this.state.article.description
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, {
              id: 'editArticle-text',
              fullWidth: true,
              floatingLabelText: 'Text',
              onChange: this.onChangeText,
              errorText: this.state.errors.text,
              value: this.state.article.text
            })
          )
        )
      );
    }
  }]);

  return EditArticle;
}(_react2.default.Component);

exports.default = EditArticle;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(8);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactCookie = __webpack_require__(16);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_React$Component) {
	_inherits(Auth, _React$Component);

	function Auth(props) {
		_classCallCheck(this, Auth);

		var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));

		_this.state = {
			errors: {
				email: '',
				password: ''
			},
			user: {
				email: '',
				password: ''
			}
		};

		_this.login = _this.login.bind(_this);
		_this.onChangeMail = _this.onChangeMail.bind(_this);
		_this.onChangePassword = _this.onChangePassword.bind(_this);
		return _this;
	}

	_createClass(Auth, [{
		key: 'onChangeMail',
		value: function onChangeMail(event) {
			this.state.user.email = event.target.value;
			this.setState(this.state.user);
		}
	}, {
		key: 'onChangePassword',
		value: function onChangePassword(event) {
			this.state.user.password = event.target.value;
			this.setState(this.state.user);
		}
	}, {
		key: 'login',
		value: function login(event) {
			event.preventDefault();

			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/login/');
			xhr.setRequestHeader('Content-type', 'application/json');
			xhr.responseType = 'json';

			xhr.addEventListener('load', function () {
				if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					console.log(xhr.response);
					if (xhr.response.success) {
						_reactCookie2.default.save("Id", xhr.response.data.id);
						_reactCookie2.default.save("Token.JWT", xhr.response.data.token);

						window.location.href = window.location.href + "articles";
					} else {
						alert(xhr.response.message);
					}
				}
			});

			xhr.send(JSON.stringify(this.state.user));
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				!this.props.isAuth && _react2.default.createElement(
					'form',
					{ action: '', onSubmit: this.login },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_TextField2.default, {
							id: 'loginForm-login',
							floatingLabelText: 'Email',
							onChange: this.onChangeMail,
							errorText: this.state.errors.email,
							value: this.state.user.email
						})
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_TextField2.default, {
							id: 'loginForm-password',
							type: 'password',
							floatingLabelText: 'Password',
							onChange: this.onChangePassword,
							errorText: this.state.errors.password,
							value: this.state.user.password
						})
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_RaisedButton2.default, { label: 'Sign In', type: 'submit' })
					)
				)
			);
		}
	}]);

	return Auth;
}(_react2.default.Component);

exports.default = Auth;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(8);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Chip = __webpack_require__(19);

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewArticle = function (_React$Component) {
    _inherits(NewArticle, _React$Component);

    function NewArticle(props) {
        _classCallCheck(this, NewArticle);

        var _this = _possibleConstructorReturn(this, (NewArticle.__proto__ || Object.getPrototypeOf(NewArticle)).call(this, props));

        _this.handleRequestDelete = function (key) {
            if (key === 3) {
                alert('Why would you want to delete React?! :)');
                return;
            }

            _this.chipData = _this.state.article.tags;
            var chipToDelete = _this.chipData.map(function (chip) {
                return chip.key;
            }).indexOf(key);
            _this.chipData.splice(chipToDelete, 1);
            _this.setState(_this.state.article);
        };

        _this.state = {
            errors: {
                title: '',
                text: '',
                description: '',
                tags: ''
            },
            article: {
                title: '',
                text: '',
                description: '',
                tags: [{
                    key: 0,
                    value: 'tag1'
                }, {
                    key: 1,
                    value: 'tag2'
                }, {
                    key: 2,
                    value: 'tag3'
                }]
            }
        };

        _this.styles = {
            chip: {
                margin: 4
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap'
            }
        };

        _this.add = _this.add.bind(_this);
        _this.onChangeTitle = _this.onChangeTitle.bind(_this);
        _this.onChangeText = _this.onChangeText.bind(_this);
        _this.onChangeDescription = _this.onChangeDescription.bind(_this);
        return _this;
    }

    _createClass(NewArticle, [{
        key: 'onChangeTitle',
        value: function onChangeTitle(event) {
            this.state.article.title = event.target.value;
            this.setState(this.state.article);
        }
    }, {
        key: 'onChangeText',
        value: function onChangeText(event) {
            this.state.article.text = event.target.value;
            this.setState(this.state.article);
        }
    }, {
        key: 'onChangeDescription',
        value: function onChangeDescription(event) {
            this.state.article.description = event.target.value;
            this.setState(this.state.article);
        }
    }, {
        key: 'add',
        value: function add(event) {
            event.preventDefault();
            var article = {
                title: this.state.article.title,
                text: this.state.article.text,
                description: this.state.article.description,
                tags: []
            };

            Array.forEach(this.state.article.tags, function (tag) {
                article.tags.push(tag.value);
            });

            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/articles');
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('Authorization', this.props.token);
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    console.log(xhr.response);
                    if (xhr.response.success) {

                        window.location.href = '/react/articles';
                    } else {
                        alert(xhr.response.message);
                    }
                }
            });

            xhr.send(JSON.stringify(article));
        }
    }, {
        key: 'renderChip',
        value: function renderChip(data) {
            var _this2 = this;

            return _react2.default.createElement(
                _Chip2.default,
                {
                    key: data.key,
                    onRequestDelete: function onRequestDelete() {
                        return _this2.handleRequestDelete(data.key);
                    },
                    style: this.styles.chip },
                data.value
            );
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { action: '', onSubmit: this.add },
                    _react2.default.createElement(
                        'div',
                        { className: 'toolBar' },
                        _react2.default.createElement(_RaisedButton2.default, { label: 'Back', href: '/react/articles' }),
                        _react2.default.createElement(_RaisedButton2.default, { label: 'Create', type: 'submit' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextField2.default, {
                            id: 'newArticle-title',
                            floatingLabelText: 'Title',
                            onChange: this.onChangeTitle,
                            errorText: this.state.errors.title,
                            value: this.state.article.title
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: this.styles.wrapper },
                        this.state.article.tags.map(this.renderChip, this)
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextField2.default, {
                            id: 'newArticle-description',
                            floatingLabelText: 'Description',
                            onChange: this.onChangeDescription,
                            errorText: this.state.errors.description,
                            value: this.state.article.description
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TextField2.default, {
                            id: 'newArticle-text',
                            floatingLabelText: 'Text',
                            onChange: this.onChangeText,
                            errorText: this.state.errors.text,
                            value: this.state.article.text
                        })
                    )
                )
            );
        }
    }]);

    return NewArticle;
}(_react2.default.Component);

exports.default = NewArticle;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(8);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewComment = function (_React$Component) {
  _inherits(NewComment, _React$Component);

  function NewComment(props) {
    _classCallCheck(this, NewComment);

    var _this = _possibleConstructorReturn(this, (NewComment.__proto__ || Object.getPrototypeOf(NewComment)).call(this, props));

    _this.state = {
      errors: {
        text: ''
      },
      comment: {
        text: ''
      }
    };

    _this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    };

    _this.add = _this.add.bind(_this);
    _this.onChangeText = _this.onChangeText.bind(_this);
    return _this;
  }

  _createClass(NewComment, [{
    key: 'onChangeText',
    value: function onChangeText(event) {
      this.state.comment.text = event.target.value;
      this.setState(this.state.comment);
    }
  }, {
    key: 'add',
    value: function add(event) {
      event.preventDefault();

      var comment = {
        text: this.state.comment.text
      };

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/articles/' + this.props.article_id + '/comments/add');
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.setRequestHeader('Authorization', this.props.token);
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          console.log(xhr.response);
          if (xhr.response.success) {

            window.location.href = window.location.href;
          } else {
            alert(xhr.response.message);
          }
        }
      });

      xhr.send(JSON.stringify(comment));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { action: '', onSubmit: this.add },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_TextField2.default, {
              id: 'newComemnt-text',
              floatingLabelText: 'Your Comment',
              onChange: this.onChangeText,
              errorText: this.state.errors.text,
              value: this.state.comment.text,
              multiLine: true,
              fullWidth: true,
              rows: 4,
              rowsMax: 8
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_RaisedButton2.default, { label: 'Add Comment', type: 'submit' })
          )
        )
      );
    }
  }]);

  return NewComment;
}(_react2.default.Component);

exports.default = NewComment;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(8);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactCookie = __webpack_require__(16);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
	_inherits(SignUp, _React$Component);

	function SignUp(props) {
		_classCallCheck(this, SignUp);

		var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

		_this.state = {
			errors: {
				name: '',
				email: '',
				password: ''
			},
			user: {
				name: '',
				email: '',
				password: ''
			}
		};

		_this.signup = _this.signup.bind(_this);
		_this.onChangeName = _this.onChangeName.bind(_this);
		_this.onChangeMail = _this.onChangeMail.bind(_this);
		_this.onChangePassword = _this.onChangePassword.bind(_this);
		return _this;
	}

	_createClass(SignUp, [{
		key: 'onChangeName',
		value: function onChangeName(event) {
			this.state.user.name = event.target.value;
			this.setState(this.state.user);
		}
	}, {
		key: 'onChangeMail',
		value: function onChangeMail(event) {
			this.state.user.email = event.target.value;
			this.setState(this.state.user);
		}
	}, {
		key: 'onChangePassword',
		value: function onChangePassword(event) {
			this.state.user.password = event.target.value;
			this.setState(this.state.user);
		}
	}, {
		key: 'signup',
		value: function signup(event) {
			event.preventDefault();

			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/signup');
			xhr.setRequestHeader('Content-type', 'application/json');
			xhr.responseType = 'json';

			xhr.addEventListener('load', function () {
				if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					console.log(xhr.response);
					if (xhr.response.success) {

						window.location.href = '/react';
					} else {
						alert(xhr.response.message);
					}
				}
			});

			xhr.send(JSON.stringify(this.state.user));
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'form',
					{ action: '', onSubmit: this.signup },
					_react2.default.createElement(
						'div',
						{ className: 'toolBar' },
						_react2.default.createElement(_RaisedButton2.default, { label: 'Back', href: '/react' }),
						_react2.default.createElement(_RaisedButton2.default, { label: 'Sign Up', type: 'submit' })
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_TextField2.default, {
							id: 'signupForm-name',
							floatingLabelText: 'Name',
							onChange: this.onChangeName,
							errorText: this.state.errors.name,
							value: this.state.user.name
						})
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_TextField2.default, {
							id: 'signupForm-login',
							floatingLabelText: 'Email',
							onChange: this.onChangeMail,
							errorText: this.state.errors.email,
							value: this.state.user.email
						})
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_TextField2.default, {
							id: 'signupForm-password',
							type: 'password',
							floatingLabelText: 'Password',
							onChange: this.onChangePassword,
							errorText: this.state.errors.password,
							value: this.state.user.password
						})
					)
				)
			);
		}
	}]);

	return SignUp;
}(_react2.default.Component);

exports.default = SignUp;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(6);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(5);

var _articleDetail = __webpack_require__(72);

var _articleDetail2 = _interopRequireDefault(_articleDetail);

var _comments = __webpack_require__(74);

var _comments2 = _interopRequireDefault(_comments);

var _newComment = __webpack_require__(78);

var _newComment2 = _interopRequireDefault(_newComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleDetailsPage = function (_React$Component) {
	_inherits(ArticleDetailsPage, _React$Component);

	function ArticleDetailsPage(props) {
		_classCallCheck(this, ArticleDetailsPage);

		return _possibleConstructorReturn(this, (ArticleDetailsPage.__proto__ || Object.getPrototypeOf(ArticleDetailsPage)).call(this, props));
	}

	_createClass(ArticleDetailsPage, [{
		key: 'render',
		value: function render() {

			var myArticle = JSON.stringify(this.props.user_id) == JSON.stringify(this.props.article.user.user_id);

			return _react2.default.createElement(
				_MuiThemeProvider2.default,
				{ muiTheme: _theme.muiTheme },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'toolBar' },
						_react2.default.createElement(_RaisedButton2.default, { label: 'Home', href: '/react' }),
						_react2.default.createElement(_RaisedButton2.default, { label: 'Articles', href: '/react/articles' }),
						myArticle && _react2.default.createElement(_RaisedButton2.default, { label: 'Edit article', href: "/react/articles/" + this.props.article.id + "/edit" })
					),
					_react2.default.createElement(_articleDetail2.default, { article: this.props.article }),
					_react2.default.createElement(_comments2.default, { comments: this.props.comments }),
					_react2.default.createElement(
						'div',
						{ className: 'newcomment-container' },
						_react2.default.createElement(_newComment2.default, { article_id: this.props.article.id, token: this.props.token })
					)
				)
			);
		}
	}]);

	return ArticleDetailsPage;
}(_react2.default.Component);

exports.default = ArticleDetailsPage;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(6);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(5);

var _articlesList = __webpack_require__(73);

var _articlesList2 = _interopRequireDefault(_articlesList);

var _authService = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticlesPage = function (_React$Component) {
	_inherits(ArticlesPage, _React$Component);

	function ArticlesPage(props) {
		_classCallCheck(this, ArticlesPage);

		return _possibleConstructorReturn(this, (ArticlesPage.__proto__ || Object.getPrototypeOf(ArticlesPage)).call(this, props));
	}

	_createClass(ArticlesPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_MuiThemeProvider2.default,
					{ muiTheme: _theme.muiTheme },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'div',
							{ className: 'toolBar' },
							_react2.default.createElement(_RaisedButton2.default, { label: 'Home', href: '/react' }),
							this.props.dataContext.isAuth && _react2.default.createElement(_RaisedButton2.default, { label: 'Log Out', onClick: _authService.logOut }),
							this.props.dataContext.isAuth && _react2.default.createElement(_RaisedButton2.default, { label: 'Add article', href: '/react/newarticle/' })
						),
						_react2.default.createElement(_articlesList2.default, { articles: this.props.dataContext.articles })
					)
				),
				_react2.default.createElement(
					'div',
					null,
					'Total items count ',
					this.props.dataContext.count
				)
			);
		}
	}]);

	return ArticlesPage;
}(_react2.default.Component);

exports.default = ArticlesPage;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(6);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(5);

var _editArticle = __webpack_require__(75);

var _editArticle2 = _interopRequireDefault(_editArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditArticlePage = function (_React$Component) {
	_inherits(EditArticlePage, _React$Component);

	function EditArticlePage(props) {
		_classCallCheck(this, EditArticlePage);

		return _possibleConstructorReturn(this, (EditArticlePage.__proto__ || Object.getPrototypeOf(EditArticlePage)).call(this, props));
	}

	_createClass(EditArticlePage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_MuiThemeProvider2.default,
					{ muiTheme: _theme.muiTheme },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_editArticle2.default, { token: this.props.dataContext.token, article: this.props.dataContext.article })
					)
				)
			);
		}
	}]);

	return EditArticlePage;
}(_react2.default.Component);

exports.default = EditArticlePage;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _login = __webpack_require__(76);

var _login2 = _interopRequireDefault(_login);

var _authService = __webpack_require__(18);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(6);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.signup = function () {

            console.log("signup");
            alert('left');
        };

        _this.signup = _this.signup.bind(_this);
        return _this;
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: _theme.muiTheme },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'toolBar' },
                        _react2.default.createElement(_RaisedButton2.default, { label: 'Articles', href: '/react/articles' }),
                        this.props.isAuth && _react2.default.createElement(_RaisedButton2.default, { label: 'Log Out', onClick: _authService.logOut }),
                        !this.props.isAuth && _react2.default.createElement(_RaisedButton2.default, { label: 'Sign Up', href: '/react/signup' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_login2.default, { isAuth: this.props.isAuth })
                    )
                )
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(6);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(5);

var _newArticle = __webpack_require__(77);

var _newArticle2 = _interopRequireDefault(_newArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewArticlePage = function (_React$Component) {
	_inherits(NewArticlePage, _React$Component);

	function NewArticlePage(props) {
		_classCallCheck(this, NewArticlePage);

		return _possibleConstructorReturn(this, (NewArticlePage.__proto__ || Object.getPrototypeOf(NewArticlePage)).call(this, props));
	}

	_createClass(NewArticlePage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_MuiThemeProvider2.default,
					{ muiTheme: _theme.muiTheme },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_newArticle2.default, { isAuth: this.props.dataContext.isAuth, token: this.props.dataContext.token })
					)
				)
			);
		}
	}]);

	return NewArticlePage;
}(_react2.default.Component);

exports.default = NewArticlePage;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _signup = __webpack_require__(79);

var _signup2 = _interopRequireDefault(_signup);

var _RaisedButton = __webpack_require__(3);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(6);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpPage = function (_React$Component) {
  _inherits(SignUpPage, _React$Component);

  function SignUpPage(props) {
    _classCallCheck(this, SignUpPage);

    var _this = _possibleConstructorReturn(this, (SignUpPage.__proto__ || Object.getPrototypeOf(SignUpPage)).call(this, props));

    _this.signup = function () {

      console.log("signup");
      alert('left');
    };

    _this.signup = _this.signup.bind(_this);
    return _this;
  }

  _createClass(SignUpPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          { muiTheme: _theme.muiTheme },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_signup2.default, null)
          )
        )
      );
    }
  }]);

  return SignUpPage;
}(_react2.default.Component);

exports.default = SignUpPage;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title,
      scriptDest = _ref.scriptDest,
      data = _ref.data;

  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>' + title + '</title>\n        <link rel="stylesheet" href="/css/react-css.css" />\n      </head>\n      \n      <body>\n        <div id="root">' + body + '</div>' + (data !== undefined ? '<script type="text/javascript" charset="utf-8">\n               window.data = ' + JSON.stringify(data) + ';\n            </script>' : '') + ('<script src="/' + scriptDest + '"></script>\n      </body>\n      \n    </html>\n  ');
};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./views/index.html";

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = require("jwt-simple");

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = require("passport-jwt");

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(57);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(56);

var _http2 = _interopRequireDefault(_http);

var _bodyParser = __webpack_require__(53);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(54);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _config = __webpack_require__(22);

var _config2 = _interopRequireDefault(_config);

var _bloglog = __webpack_require__(23);

var _bloglog2 = _interopRequireDefault(_bloglog);

var _bloglog3 = __webpack_require__(42);

var _bloglog4 = _interopRequireDefault(_bloglog3);

var _bloglogUi = __webpack_require__(25);

var _bloglogUi2 = _interopRequireDefault(_bloglogUi);

var _bloglog5 = __webpack_require__(24);

var _bloglog6 = _interopRequireDefault(_bloglog5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use((0, _cookieParser2.default)());

app.use(_bodyParser2.default.json());

app.use(_express2.default.static('./dist'));
app.use(_express2.default.static('./node_modules'));

app.set('view engine', 'html');
app.engine('html', __webpack_require__(55).renderFile);
app.set('views', _path2.default.join(__dirname, './'));

_bloglog6.default.initialize(app);

app.use('/api', _bloglog2.default);
app.use('/react', _bloglogUi2.default);
app.use('/', _bloglog4.default);

console.log("NODE_ENV " + process.env.NODE_ENV);

app.server.listen(process.env.PORT || _config2.default.port);

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map