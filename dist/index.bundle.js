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
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function Result(data, success, message, code) {
  (0, _classCallCheck3.default)(this, Result);

  this.data = data;
  this.success = success;
  this.message = message;
  this.code = code;
};

exports.default = Result;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultCodes = function () {
    function ResultCodes() {
        (0, _classCallCheck3.default)(this, ResultCodes);
    }

    (0, _createClass3.default)(ResultCodes, null, [{
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
/* 5 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commentService = exports.userService = exports.tagService = exports.articleService = undefined;

var _articleService = __webpack_require__(74);

var _articleService2 = _interopRequireDefault(_articleService);

var _tagService = __webpack_require__(76);

var _tagService2 = _interopRequireDefault(_tagService);

var _userService = __webpack_require__(77);

var _userService2 = _interopRequireDefault(_userService);

var _commentService = __webpack_require__(75);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.muiTheme = undefined;

var _getMuiTheme = __webpack_require__(94);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var muiTheme = exports.muiTheme = (0, _getMuiTheme2.default)({
    palette: {
        primary1Color: _colors.deepOrange500
    }
}, {
    avatar: {
        borderColor: null
    },
    userAgent: 'all'
});

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRepository = exports.userRepository = exports.tagRepository = exports.articleRepository = undefined;

var _mongoose = __webpack_require__(14);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _articleRepository = __webpack_require__(70);

var _articleRepository2 = _interopRequireDefault(_articleRepository);

var _tagRepository = __webpack_require__(72);

var _tagRepository2 = _interopRequireDefault(_tagRepository);

var _userRepository = __webpack_require__(73);

var _userRepository2 = _interopRequireDefault(_userRepository);

var _commentRepository = __webpack_require__(71);

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
/* 16 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleModel = function ArticleModel(id, title, text, description, tags, createDateTime, updateDateTime, user) {
  (0, _classCallCheck3.default)(this, ArticleModel);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentModel = function CommentModel(id, text, user, createDateTime, article_id) {
  (0, _classCallCheck3.default)(this, CommentModel);

  this.id = id;
  this.text = text;
  this.user = user;
  this.createDateTime = createDateTime;
  this.article_id = article_id;
};

exports.default = CommentModel;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagModel = function TagModel(id, value, article_ids) {
  (0, _classCallCheck3.default)(this, TagModel);

  this.id = id;
  this.value = value;
  this.article_ids = article_ids;
};

exports.default = TagModel;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserModel = function UserModel(id, name, email, password) {
  (0, _classCallCheck3.default)(this, UserModel);

  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
};

exports.default = UserModel;

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("react-cookie");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageResult = function PageResult(data, count) {
  (0, _classCallCheck3.default)(this, PageResult);

  this.data = data;
  this.count = count;
};

exports.default = PageResult;

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("material-ui/List");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("passport");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("ts-md5/dist/md5");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = {
	"port": 8080,
	"bodyLimit": "100kb",
	"corsHeaders": [
		"Link"
	]
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _articleRoutes = __webpack_require__(64);

var _articleRoutes2 = _interopRequireDefault(_articleRoutes);

var _tagsRoutes = __webpack_require__(65);

var _tagsRoutes2 = _interopRequireDefault(_tagsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/articles', _articleRoutes2.default);

router.use('/tags', _tagsRoutes2.default);

exports.default = router;

/***/ },
/* 30 */
/***/ function(module, exports) {

"use strict";
throw new Error("Module build failed: D:/FrontCamp-Home6/src/bloglog.auth/index.js: Duplicate declaration \"opts\"\n\n\u001b[0m \u001b[90m 43 | \u001b[39m    }))\u001b[33m;\u001b[39m\n \u001b[90m 44 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 45 | \u001b[39m    let opts \u001b[33m=\u001b[39m {}\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 46 | \u001b[39m    opts\u001b[33m.\u001b[39msecretOrKey \u001b[33m=\u001b[39m \u001b[32m\"zlovzlovzlolovlll\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 47 | \u001b[39m    opts\u001b[33m.\u001b[39mjwtFromRequest \u001b[33m=\u001b[39m \u001b[36mfunction\u001b[39m (req) {\n \u001b[90m 48 | \u001b[39m        \u001b[36mvar\u001b[39m token \u001b[33m=\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(10);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(96);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = __webpack_require__(97);

var _server2 = _interopRequireDefault(_server);

var _template = __webpack_require__(89);

var _template2 = _interopRequireDefault(_template);

var _main = __webpack_require__(86);

var _main2 = _interopRequireDefault(_main);

var _signupPage = __webpack_require__(88);

var _signupPage2 = _interopRequireDefault(_signupPage);

var _articlesPage = __webpack_require__(85);

var _articlesPage2 = _interopRequireDefault(_articlesPage);

var _articleDetailsPage = __webpack_require__(84);

var _articleDetailsPage2 = _interopRequireDefault(_articleDetailsPage);

var _newArticlePage = __webpack_require__(87);

var _newArticlePage2 = _interopRequireDefault(_newArticlePage);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

var _bloglog = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

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

router.get('/newarticle', passport.authenticate('jwt-cookie', { session: false }), function (req, res) {
    debugger;
    var dataContext = { isAuth: true };
    var html = _server2.default.renderToString(_react2.default.createElement(_newArticlePage2.default, { dataContext: dataContext }));
    res.send((0, _template2.default)({
        body: html,
        title: 'Blog Log',
        scriptDest: 'react/newArticle.bundle.js',
        data: {
            isAuth: true
        }
    }));
});

router.get('/articles/:id', function (req, res) {

    var article_id = req.params.id;

    if (article_id) {

        _bloglog.articleService.getById(article_id).then(function (result) {

            _bloglog.commentService.getCommentsByArticleId(article_id, 0, 10).then(function (resultComments) {

                var html = _server2.default.renderToString(_react2.default.createElement(_articleDetailsPage2.default, { article: result.data, comments: resultComments.data }));
                res.send((0, _template2.default)({
                    body: html,
                    title: 'Blog Log',
                    scriptDest: 'react/articleDetails.bundle.js',
                    data: {
                        article: result.data,
                        comments: resultComments.data
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
    _bloglog.articleService.get({}, 0, 10).then(function (result) {

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
});

exports.default = router;

/***/ },
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
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(10);

__webpack_require__(90);

var router = (0, _express.Router)();

router.use('/', function (req, res) {
    res.render('./views/index.html');
});

exports.default = router;

/***/ },
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("ejs");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _passport = __webpack_require__(26);

var _passport2 = _interopRequireDefault(_passport);

var _bloglog = __webpack_require__(11);

var _articleModel = __webpack_require__(17);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _commentModel = __webpack_require__(18);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(10);

var _bloglog = __webpack_require__(11);

var _tagModel = __webpack_require__(19);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(14);

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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(14);

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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(14);

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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(14);

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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(21);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleDataModel = __webpack_require__(66);

var _articleDataModel2 = _interopRequireDefault(_articleDataModel);

var _articleModel = __webpack_require__(17);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(24);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleRepository = function () {
    function ArticleRepository() {
        (0, _classCallCheck3.default)(this, ArticleRepository);
    }

    (0, _createClass3.default)(ArticleRepository, [{
        key: 'get',
        value: function get(skip, count) {
            return new _promise2.default(function (resolve, reject) {

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
                                for (var _iterator = (0, _getIterator3.default)(articles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

            return new _promise2.default(function (resolve, reject) {

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
                                for (var _iterator2 = (0, _getIterator3.default)(articles), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
            return new _promise2.default(function (resolve, reject) {

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
            return new _promise2.default(function (resolve, reject) {

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
            return new _promise2.default(function (resolve, reject) {

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
            return new _promise2.default(function (resolve, reject) {

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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(21);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _commentDataModel = __webpack_require__(67);

var _commentDataModel2 = _interopRequireDefault(_commentDataModel);

var _commentModel = __webpack_require__(18);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(24);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentRepository = function () {
    function CommentRepository() {
        (0, _classCallCheck3.default)(this, CommentRepository);
    }

    (0, _createClass3.default)(CommentRepository, [{
        key: 'getByArticleId',
        value: function getByArticleId(article_id, skip, count) {
            return new _promise2.default(function (resolve, reject) {

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
                            for (var _iterator = (0, _getIterator3.default)(comments), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
            return new _promise2.default(function (resolve, reject) {

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
            return new _promise2.default(function (resolve, reject) {

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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(21);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagDataModel = __webpack_require__(68);

var _tagDataModel2 = _interopRequireDefault(_tagDataModel);

var _tagModel = __webpack_require__(19);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagRepository = function () {
    function TagRepository() {
        (0, _classCallCheck3.default)(this, TagRepository);
    }

    (0, _createClass3.default)(TagRepository, [{
        key: 'getByValues',
        value: function getByValues(values) {

            return new _promise2.default(function (resolve, reject) {
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
                            for (var _iterator = (0, _getIterator3.default)(tags), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

            return new _promise2.default(function (resolve, reject) {
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
                            for (var _iterator2 = (0, _getIterator3.default)(tags), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
            return new _promise2.default(function (resolve, reject) {

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
                            for (var _iterator3 = (0, _getIterator3.default)(tags), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
            return new _promise2.default(function (resolve, reject) {

                var updates = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = (0, _getIterator3.default)(tagValues), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _userDataModel = __webpack_require__(69);

var _userDataModel2 = _interopRequireDefault(_userDataModel);

var _userModel = __webpack_require__(20);

var _userModel2 = _interopRequireDefault(_userModel);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRepository = function () {
  function UserRepository() {
    (0, _classCallCheck3.default)(this, UserRepository);
  }

  (0, _createClass3.default)(UserRepository, [{
    key: 'get',
    value: function get(email) {

      return new _promise2.default(function (resolve, reject) {
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleModel = __webpack_require__(17);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _bloglog = __webpack_require__(15);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

var _bloglog2 = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleService = function () {
  function ArticleService() {
    (0, _classCallCheck3.default)(this, ArticleService);
  }

  (0, _createClass3.default)(ArticleService, [{
    key: 'getRecent',
    value: function getRecent() {
      return _bloglog.articleRepository.get(0, 10);
    }
  }, {
    key: 'get',
    value: function get(filterData, skip, count) {

      return new _promise2.default(function (resolve, reject) {
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

      return new _promise2.default(function (resolve, reject) {
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
        return new _promise2.default(function (resolve, reject) {

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

      return _promise2.default.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }, {
    key: 'update',
    value: function update(articleModel) {
      if (!checkArticle(articleModel)) {
        return _promise2.default.reject(new _result2.default(null, false, "The given article is not valid", _resultCodes2.default.InvalidObject()));
      }

      return new _promise2.default(function (resolve, reject) {
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

      return new _promise2.default(function (resolve, reject) {
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _commentModel = __webpack_require__(18);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _bloglog = __webpack_require__(15);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentService = function () {
  function CommentService() {
    (0, _classCallCheck3.default)(this, CommentService);
  }

  (0, _createClass3.default)(CommentService, [{
    key: 'getCommentsByArticleId',
    value: function getCommentsByArticleId(article_id, skip, count) {
      return _bloglog.commentRepository.getByArticleId(article_id, skip, count);
    }
  }, {
    key: 'add',
    value: function add(commentModel) {
      if (!checkComment(commentModel)) {
        return _promise2.default.reject(new _result2.default(null, false, "The given comment is not valid", _resultCodes2.default.InvalidObject()));
      }

      return new _promise2.default(function (resolve, reject) {

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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagModel = __webpack_require__(19);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _bloglog = __webpack_require__(15);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagService = function () {
  function TagService() {
    (0, _classCallCheck3.default)(this, TagService);
  }

  (0, _createClass3.default)(TagService, [{
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

      return _promise2.default.reject(new _result2.default(null, false, "Given tagIds is not Array", _resultCodes2.default.InvalidObject()));
    }
  }, {
    key: 'createOrUpdateByArticleId',
    value: function createOrUpdateByArticleId(articleId, tagValues) {
      if (Array.isArray(tagValues)) {
        return _bloglog.tagRepository.createOrUpdateByArticleId(articleId, tagValues);
      }

      return _promise2.default.reject(new _result2.default(null, false, "Given tag values is not Array", _resultCodes2.default.InvalidObject()));
    }
  }, {
    key: 'add',
    value: function add(tagModel) {
      if (checkTag(tagModel)) {
        return new _bloglog.tagRepository.add(tagModel);
      }

      return _promise2.default.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(8);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _md = __webpack_require__(27);

var _userModel = __webpack_require__(20);

var _userModel2 = _interopRequireDefault(_userModel);

var _bloglog = __webpack_require__(15);

var _result = __webpack_require__(3);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(4);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService = function () {
  function UserService() {
    (0, _classCallCheck3.default)(this, UserService);
  }

  (0, _createClass3.default)(UserService, [{
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

      return _promise2.default.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleDetail = function (_React$Component) {
	(0, _inherits3.default)(ArticleDetail, _React$Component);

	function ArticleDetail(props) {
		(0, _classCallCheck3.default)(this, ArticleDetail);
		return (0, _possibleConstructorReturn3.default)(this, (ArticleDetail.__proto__ || (0, _getPrototypeOf2.default)(ArticleDetail)).call(this, props));
	}

	(0, _createClass3.default)(ArticleDetail, [{
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticlesList = function (_React$Component) {
	(0, _inherits3.default)(ArticlesList, _React$Component);

	function ArticlesList(props) {
		(0, _classCallCheck3.default)(this, ArticlesList);
		return (0, _possibleConstructorReturn3.default)(this, (ArticlesList.__proto__ || (0, _getPrototypeOf2.default)(ArticlesList)).call(this, props));
	}

	(0, _createClass3.default)(ArticlesList, [{
		key: 'selectArticle',
		value: function selectArticle(id) {
			window.location.href = window.location.href + id;
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comments = function (_React$Component) {
    (0, _inherits3.default)(Comments, _React$Component);

    function Comments(props) {
        (0, _classCallCheck3.default)(this, Comments);
        return (0, _possibleConstructorReturn3.default)(this, (Comments.__proto__ || (0, _getPrototypeOf2.default)(Comments)).call(this, props));
    }

    (0, _createClass3.default)(Comments, [{
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__(16);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactCookie = __webpack_require__(23);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function (_React$Component) {
	(0, _inherits3.default)(Auth, _React$Component);

	function Auth(props) {
		(0, _classCallCheck3.default)(this, Auth);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call(this, props));

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
		_this.logOut = _this.logOut.bind(_this);
		_this.onChangeMail = _this.onChangeMail.bind(_this);
		_this.onChangePassword = _this.onChangePassword.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Auth, [{
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

						window.location.href = window.location.href;
					} else {
						alert(xhr.response.message);
					}
				}
			});

			xhr.send((0, _stringify2.default)(this.state.user));
		}
	}, {
		key: 'logOut',
		value: function logOut(event) {
			_reactCookie2.default.remove("Id");
			_reactCookie2.default.remove("Token.JWT");
			window.location.href = window.location.href;
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				!this.props.isAuth ? _react2.default.createElement(
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
				) : _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_RaisedButton2.default, { label: 'Log Out', onClick: this.logOut })
				)
			);
		}
	}]);
	return Auth;
}(_react2.default.Component);

exports.default = Auth;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(16);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Chip = __webpack_require__(92);

var _Chip2 = _interopRequireDefault(_Chip);

var _reactCookie = __webpack_require__(23);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewArticle = function (_React$Component) {
    (0, _inherits3.default)(NewArticle, _React$Component);

    function NewArticle(props) {
        (0, _classCallCheck3.default)(this, NewArticle);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewArticle.__proto__ || (0, _getPrototypeOf2.default)(NewArticle)).call(this, props));

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

    (0, _createClass3.default)(NewArticle, [{
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

            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/articles');
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('Authorization', this.props.token);
            xhr.responseType = 'json';

            xhr.addEventListener('load', function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    console.log(xhr.response);
                    if (xhr.response.success) {

                        window.location.href = '/react/articles/';
                    } else {
                        alert(xhr.response.message);
                    }
                }
            });

            xhr.send((0, _stringify2.default)(this.state.article));
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
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_RaisedButton2.default, { label: 'Create Article', type: 'submit' })
                    )
                )
            );
        }
    }]);
    return NewArticle;
}(_react2.default.Component);

exports.default = NewArticle;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__(16);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(22);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactCookie = __webpack_require__(23);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = function (_React$Component) {
	(0, _inherits3.default)(SignUp, _React$Component);

	function SignUp(props) {
		(0, _classCallCheck3.default)(this, SignUp);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SignUp.__proto__ || (0, _getPrototypeOf2.default)(SignUp)).call(this, props));

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

	(0, _createClass3.default)(SignUp, [{
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

			xhr.send((0, _stringify2.default)(this.state.user));
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
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_RaisedButton2.default, { label: 'Sign Un', type: 'submit' })
					)
				)
			);
		}
	}]);
	return SignUp;
}(_react2.default.Component);

exports.default = SignUp;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(13);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(12);

var _articleDetail = __webpack_require__(78);

var _articleDetail2 = _interopRequireDefault(_articleDetail);

var _comments = __webpack_require__(80);

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleDetailsPage = function (_React$Component) {
	(0, _inherits3.default)(ArticleDetailsPage, _React$Component);

	function ArticleDetailsPage(props) {
		(0, _classCallCheck3.default)(this, ArticleDetailsPage);
		return (0, _possibleConstructorReturn3.default)(this, (ArticleDetailsPage.__proto__ || (0, _getPrototypeOf2.default)(ArticleDetailsPage)).call(this, props));
	}

	(0, _createClass3.default)(ArticleDetailsPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_MuiThemeProvider2.default,
				{ muiTheme: _theme.muiTheme },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_articleDetail2.default, { article: this.props.article }),
					_react2.default.createElement(_comments2.default, { comments: this.props.comments })
				)
			);
		}
	}]);
	return ArticleDetailsPage;
}(_react2.default.Component);

exports.default = ArticleDetailsPage;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(13);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(12);

var _articlesList = __webpack_require__(79);

var _articlesList2 = _interopRequireDefault(_articlesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticlesPage = function (_React$Component) {
	(0, _inherits3.default)(ArticlesPage, _React$Component);

	function ArticlesPage(props) {
		(0, _classCallCheck3.default)(this, ArticlesPage);
		return (0, _possibleConstructorReturn3.default)(this, (ArticlesPage.__proto__ || (0, _getPrototypeOf2.default)(ArticlesPage)).call(this, props));
	}

	(0, _createClass3.default)(ArticlesPage, [{
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
						_react2.default.createElement(_articlesList2.default, { articles: this.props.dataContext.data }),
						!this.props.isAuth && _react2.default.createElement(_RaisedButton2.default, { label: 'Add article', href: '/react/newarticle/' })
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _login = __webpack_require__(81);

var _login2 = _interopRequireDefault(_login);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(13);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function (_React$Component) {
    (0, _inherits3.default)(Main, _React$Component);

    function Main(props) {
        (0, _classCallCheck3.default)(this, Main);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));

        _this.signup = function () {

            console.log("signup");
            alert('left');
        };

        _this.signup = _this.signup.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Main, [{
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
                        _react2.default.createElement(_login2.default, { isAuth: this.props.isAuth }),
                        !this.props.isAuth && _react2.default.createElement(_RaisedButton2.default, { label: 'Sign Up', href: '/react/signup' }),
                        _react2.default.createElement(_RaisedButton2.default, { label: 'Articles', href: '/react/articles' })
                    )
                )
            );
        }
    }]);
    return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(13);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(12);

var _newArticle = __webpack_require__(82);

var _newArticle2 = _interopRequireDefault(_newArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewArticlePage = function (_React$Component) {
	(0, _inherits3.default)(NewArticlePage, _React$Component);

	function NewArticlePage(props) {
		(0, _classCallCheck3.default)(this, NewArticlePage);
		return (0, _possibleConstructorReturn3.default)(this, (NewArticlePage.__proto__ || (0, _getPrototypeOf2.default)(NewArticlePage)).call(this, props));
	}

	(0, _createClass3.default)(NewArticlePage, [{
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _signup = __webpack_require__(83);

var _signup2 = _interopRequireDefault(_signup);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = __webpack_require__(13);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpPage = function (_React$Component) {
    (0, _inherits3.default)(SignUpPage, _React$Component);

    function SignUpPage(props) {
        (0, _classCallCheck3.default)(this, SignUpPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SignUpPage.__proto__ || (0, _getPrototypeOf2.default)(SignUpPage)).call(this, props));

        _this.signup = function () {

            console.log("signup");
            alert('left');
        };

        _this.signup = _this.signup.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(SignUpPage, [{
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
                        _react2.default.createElement(_signup2.default, null),
                        _react2.default.createElement(_RaisedButton2.default, { label: 'Back to Main', href: '/react' })
                    )
                )
            );
        }
    }]);
    return SignUpPage;
}(_react2.default.Component);

exports.default = SignUpPage;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(16);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title,
      scriptDest = _ref.scriptDest,
      data = _ref.data;

  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>' + title + '</title>\n        <link rel="stylesheet" href="/css/react-css.css" />\n      </head>\n      \n      <body>\n        <div id="root">' + body + '</div>' + (data !== undefined ? '<script type="text/javascript" charset="utf-8">\n               window.data = ' + (0, _stringify2.default)(data) + ';\n            </script>' : '') + ('<script src="/' + scriptDest + '"></script>\n      </body>\n      \n    </html>\n  ');
};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./views/index.html";

/***/ },
/* 91 */,
/* 92 */
/***/ function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 95 */,
/* 96 */
/***/ function(module, exports) {

module.exports = require("react-dom");

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(63);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(62);

var _http2 = _interopRequireDefault(_http);

var _bodyParser = __webpack_require__(59);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(60);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _config = __webpack_require__(28);

var _config2 = _interopRequireDefault(_config);

var _bloglog = __webpack_require__(29);

var _bloglog2 = _interopRequireDefault(_bloglog);

var _bloglog3 = __webpack_require__(48);

var _bloglog4 = _interopRequireDefault(_bloglog3);

var _bloglogUi = __webpack_require__(31);

var _bloglogUi2 = _interopRequireDefault(_bloglogUi);

var _bloglog5 = __webpack_require__(30);

var _bloglog6 = _interopRequireDefault(_bloglog5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use((0, _cookieParser2.default)());

app.use(_bodyParser2.default.json());

app.use(_express2.default.static('./dist'));
app.use(_express2.default.static('./node_modules'));

app.set('view engine', 'html');
app.engine('html', __webpack_require__(61).renderFile);
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