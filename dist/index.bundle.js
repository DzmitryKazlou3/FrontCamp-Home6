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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
/* 3 */
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
    }]);
    return ResultCodes;
}();

exports.default = ResultCodes;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRepository = exports.userRepository = exports.tagRepository = exports.articleRepository = undefined;

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _articleRepository = __webpack_require__(38);

var _articleRepository2 = _interopRequireDefault(_articleRepository);

var _tagRepository = __webpack_require__(40);

var _tagRepository2 = _interopRequireDefault(_tagRepository);

var _userRepository = __webpack_require__(41);

var _userRepository2 = _interopRequireDefault(_userRepository);

var _commentRepository = __webpack_require__(39);

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commentService = exports.userService = exports.tagService = exports.articleService = undefined;

var _articleService = __webpack_require__(42);

var _articleService2 = _interopRequireDefault(_articleService);

var _tagService = __webpack_require__(44);

var _tagService2 = _interopRequireDefault(_tagService);

var _userService = __webpack_require__(45);

var _userService2 = _interopRequireDefault(_userService);

var _commentService = __webpack_require__(43);

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleModel = function ArticleModel(id, title, text, tags, createDateTime, updateDateTime, user) {
  (0, _classCallCheck3.default)(this, ArticleModel);

  this.id = id;
  this.title = title;
  this.text = text;
  this.tags = tags;
  this.createDateTime = createDateTime;
  this.updateDateTime = updateDateTime;
  this.user = user;
};

exports.default = ArticleModel;

/***/ },
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports) {

module.exports = require("passport");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = {
	"port": 8080,
	"bodyLimit": "100kb",
	"corsHeaders": [
		"Link"
	]
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _articleRoutes = __webpack_require__(31);

var _articleRoutes2 = _interopRequireDefault(_articleRoutes);

var _tagsRoutes = __webpack_require__(32);

var _tagsRoutes2 = _interopRequireDefault(_tagsRoutes);

var _userRoutes = __webpack_require__(33);

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/articles', _articleRoutes2.default);

router.use('/tags', _tagsRoutes2.default);

router.use('/users', _userRoutes2.default);

exports.default = router;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = __webpack_require__(47);

var _bloglog = __webpack_require__(9);

var _userModel = __webpack_require__(7);

var _userModel2 = _interopRequireDefault(_userModel);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(app) {
    app.use(_passport2.default.initialize());
    app.use(_passport2.default.session());

    _passport2.default.serializeUser(function (user, done) {
        done(null, user.email);
    });

    _passport2.default.deserializeUser(function (email, done) {

        _bloglog.userService.get(email).then(function (result) {
            if (result.success) {
                return done(err, user);
            }
        }).catchcatch(function (error) {
            done(err);
        });
    });

    app.post('/login', _passport2.default.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/#/login',
        failureFlash: true
    }));

    app.post('/signup', _passport2.default.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/#/login',
        failureFlash: true
    }));

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    _passport2.default.use('local', new _passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (username, password, done) {
        debugger;
        _bloglog.userService.get(username).then(function (result) {
            if (result.success) {
                return done(null, result.data);
            }

            return done(null, false, { message: 'Invalid credentials.' });
        }).catch(function (error) {
            return done(error);
        });
    }));

    _passport2.default.use('signup', new _passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {

        _bloglog.userService.get(username, password).then(function (result) {

            if (result.success) {
                return done(null, false, { message: "user exists." });
            }
        }).catch(function (refuceResult) {

            if (refuceResult.code === _resultCodes2.default.ObjectNotFound()) {
                _bloglog.userService.add(new _userModel2.default(null, req.body.name, req.body.email, req.body.password)).then(function (result) {
                    _passport2.default.authenticate('local', { failureRedirect: '/#login' });
                    return done(null, result._doc);
                }).catch(function (result) {
                    return done(null, false, { message: 'Invalid credentials.' });
                });
            } else {
                return done(refuceResult);
            }
        });
    }));
}

exports.default = { initialize: initialize };

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(5);

__webpack_require__(46);

var router = (0, _express.Router)();

router.use('/', function (req, res) {
    res.render('index.html');
});

exports.default = router;

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("ejs");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _bloglog = __webpack_require__(9);

var _articleModel = __webpack_require__(10);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _commentModel = __webpack_require__(11);

var _commentModel2 = _interopRequireDefault(_commentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {

  _passport2.default.authenticate('local', { failureRedirect: '/#login' });
  _bloglog.articleService.getRecent().then(function (result) {
    res.json(result);
  }).catch(function (errorResult) {
    res.json(errorResult);
  });
});

router.post('/', function (req, res, next) {

  _bloglog.articleService.add(new _articleModel2.default(null, req.body.title, req.body.text, req.body.tags, Date.now(), Date.now(), req.body.user)).then(function () {
    return res.sendStatus(200);
  }).catch(function (result) {
    return res.json(result);
  });
});

router.get('/:id/comments', function (req, res, next) {

  var article_id = req.params.id;
  _bloglog.commentService.getCommentsByArticleId(article_id).then(function (result) {
    return res.json(result);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

router.post('/:id/comments', function (req, res, next) {

  var article_id = req.params.id;
  _bloglog.commentService.add(new _commentModel2.default(null, req.body.text, req.body.user, Date.now(), article_id)).then(function () {
    return res.sendStatus(200);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

exports.default = router;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _bloglog = __webpack_require__(9);

var _tagModel = __webpack_require__(12);

var _tagModel2 = _interopRequireDefault(_tagModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {

  _bloglog.tagService.getTags().then(function (result) {
    res.json(result);
  }).catch(function (errorResult) {
    res.json(errorResult);
  });
});

router.post('/', function (req, res, next) {

  _bloglog.tagService.add(new _tagModel2.default(null, req.body.value, [])).then(function () {
    return res.sendStatus(200);
  }).catch(function (result) {
    return res.json(result);
  });
});

exports.default = router;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _bloglog = __webpack_require__(9);

var _userModel = __webpack_require__(7);

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/:id', function (req, res, next) {
  res.end("not yet implemented");
});

router.post('/', function (req, res, next) {

  _bloglog.userService.add(new _userModel2.default(null, req.body.name, req.body.email, req.body.password)).then(function () {
    return res.sendStatus(200);
  }).catch(function (result) {
    return res.json(result);
  });
});

exports.default = router;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(6);

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
    'tags': {
        type: String,
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(6);

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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tagSchema = new _mongoose2.default.Schema({
	'value': {
		type: String,
		required: true,
		unique: true
	},
	'articles': {
		type: Array
	}
});

exports.default = _mongoose2.default.model('tags', tagSchema);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(6);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleDataModel = __webpack_require__(34);

var _articleDataModel2 = _interopRequireDefault(_articleDataModel);

var _articleModel = __webpack_require__(10);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(14);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(3);

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
        value: function add(article) {
            return _articleDataModel2.default.create(article);
        }
    }]);
    return ArticleRepository;
}();

exports.default = ArticleRepository;
;

function MapToArticleModel(articleDataModel) {
    return new _articleModel2.default(articleDataModel._id, articleDataModel.title, articleDataModel.text, articleDataModel.tags, articleDataModel.createDateTime, articleDataModel.updateDateTime, articleDataModel.user);
}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _commentDataModel = __webpack_require__(35);

var _commentDataModel2 = _interopRequireDefault(_commentDataModel);

var _commentModel = __webpack_require__(11);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(14);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentRepository = function () {
    function CommentRepository() {
        (0, _classCallCheck3.default)(this, CommentRepository);
    }

    (0, _createClass3.default)(CommentRepository, [{
        key: 'getByArticleId',
        value: function getByArticleId(article_id) {
            return new _promise2.default(function (resolve, reject) {
                _commentDataModel2.default.find({ 'article_id': article_id }).sort('-createDateTime').exec(function (err, comments) {
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
        value: function add(comment) {
            return _commentDataModel2.default.create(comment);
        }
    }]);
    return CommentRepository;
}();

exports.default = CommentRepository;
;

function MapToCommentModel(commentDataModel) {
    return new _commentModel2.default(commentDataModel._id, commentDataModel.text, commentDataModel.user, commentDataModel.createDateTime, commentDataModel.article_id);
}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagDataModel = __webpack_require__(36);

var _tagDataModel2 = _interopRequireDefault(_tagDataModel);

var _tagModel = __webpack_require__(12);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagRepository = function () {
    function TagRepository() {
        (0, _classCallCheck3.default)(this, TagRepository);
    }

    (0, _createClass3.default)(TagRepository, [{
        key: 'get',
        value: function get() {

            return new _promise2.default(function (resolve, reject) {
                _tagDataModel2.default.find({}).exec(function (err, tags) {
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _userDataModel = __webpack_require__(37);

var _userDataModel2 = _interopRequireDefault(_userDataModel);

var _userModel = __webpack_require__(7);

var _userModel2 = _interopRequireDefault(_userModel);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

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
  return new _userModel2.default(user._id, user.name, user.email, "");
}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleModel = __webpack_require__(10);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _bloglog = __webpack_require__(8);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

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
    key: 'add',
    value: function add(articleModel) {
      if (checkArticle(articleModel)) {
        return new _bloglog.articleRepository.add(articleModel);
      }

      return _promise2.default.reject(new _result2.default(null, false, "", _resultCodes2.default.InvalidObject()));
    }
  }]);
  return ArticleService;
}();

exports.default = ArticleService;
;

function checkArticle(article) {
  if (!article.title || article.title.length === 0 || article.title.length > 500) {
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _commentModel = __webpack_require__(11);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _bloglog = __webpack_require__(8);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagService = function () {
  function TagService() {
    (0, _classCallCheck3.default)(this, TagService);
  }

  (0, _createClass3.default)(TagService, [{
    key: 'getCommentsByArticleId',
    value: function getCommentsByArticleId(article_id) {
      return _bloglog.commentRepository.getByArticleId(article_id);
    }
  }, {
    key: 'add',
    value: function add(commentModel) {

      return new _promise2.default(function (resolve, reject) {
        _bloglog.articleRepository.getById(commentModel.article_id).then(function (result) {
          if (result.success) {
            if (checkComment(commentModel)) {
              return resolve(new _bloglog.commentRepository.add(commentModel));
            }

            return reject(new _result2.default(null, false, "Comment has invalid field", _resultCodes2.default.InvalidObject()));
          } else {
            reject(result);
          }
        }).catch(function (errorResult) {
          reject(new _result2.default(null, false, errorResult.message, errorResult.code));
        });
      });
    }
  }]);
  return TagService;
}();

exports.default = TagService;

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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagModel = __webpack_require__(12);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _bloglog = __webpack_require__(8);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagService = function () {
  function TagService() {
    (0, _classCallCheck3.default)(this, TagService);
  }

  (0, _createClass3.default)(TagService, [{
    key: 'getTags',
    value: function getTags() {
      return _bloglog.tagRepository.get();
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _md = __webpack_require__(48);

var _userModel = __webpack_require__(7);

var _userModel2 = _interopRequireDefault(_userModel);

var _bloglog = __webpack_require__(8);

var _result = __webpack_require__(2);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(3);

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
  }]);
  return UserService;
}();

exports.default = UserService;
;

function checkUser(user) {
  if (!user.email || user.email.length === 0 || user.email.length > 50) {
    return false;
  }

  if (!user.name || user.name.length === 0 || user.name.length > 50) {
    return false;
  }

  if (!user.password || user.password.length === 0 || user.password.length > 50) {
    return false;
  }

  return true;
}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./views/index.html";

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("passport-local");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("ts-md5/dist/md5");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(30);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(29);

var _http2 = _interopRequireDefault(_http);

var _bodyParser = __webpack_require__(27);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = __webpack_require__(16);

var _config2 = _interopRequireDefault(_config);

var _bloglog = __webpack_require__(17);

var _bloglog2 = _interopRequireDefault(_bloglog);

var _bloglog3 = __webpack_require__(26);

var _bloglog4 = _interopRequireDefault(_bloglog3);

var _bloglog5 = __webpack_require__(18);

var _bloglog6 = _interopRequireDefault(_bloglog5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use(_bodyParser2.default.json());

app.use(_express2.default.static('dist'));
app.use(_express2.default.static('./node_modules'));

app.set('view engine', 'html');
app.engine('html', __webpack_require__(28).renderFile);
app.set('views', _path2.default.join(__dirname, '/views'));

_bloglog6.default.initialize(app);

app.use('/api', _bloglog2.default);
app.use('/', _bloglog4.default);

app.server.listen(process.env.PORT || _config2.default.port);

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map