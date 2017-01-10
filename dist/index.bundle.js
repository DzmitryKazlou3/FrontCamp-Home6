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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 1 */
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

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
/* 3 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

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
exports.commentRepository = exports.userRepository = exports.tagRepository = exports.articleRepository = undefined;

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _articleRepository = __webpack_require__(53);

var _articleRepository2 = _interopRequireDefault(_articleRepository);

var _tagRepository = __webpack_require__(55);

var _tagRepository2 = _interopRequireDefault(_tagRepository);

var _userRepository = __webpack_require__(56);

var _userRepository2 = _interopRequireDefault(_userRepository);

var _commentRepository = __webpack_require__(54);

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commentService = exports.userService = exports.tagService = exports.articleService = undefined;

var _articleService = __webpack_require__(57);

var _articleService2 = _interopRequireDefault(_articleService);

var _tagService = __webpack_require__(59);

var _tagService2 = _interopRequireDefault(_tagService);

var _userService = __webpack_require__(60);

var _userService2 = _interopRequireDefault(_userService);

var _commentService = __webpack_require__(58);

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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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

module.exports = require("ts-md5/dist/md5");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = {
	"port": 8080,
	"bodyLimit": "100kb",
	"corsHeaders": [
		"Link"
	]
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _articleRoutes = __webpack_require__(47);

var _articleRoutes2 = _interopRequireDefault(_articleRoutes);

var _tagsRoutes = __webpack_require__(48);

var _tagsRoutes2 = _interopRequireDefault(_tagsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/articles', _articleRoutes2.default);

router.use('/tags', _tagsRoutes2.default);

exports.default = router;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = __webpack_require__(63);

var _jwtSimple = __webpack_require__(62);

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

var _md = __webpack_require__(16);

var _bloglog = __webpack_require__(8);

var _userModel = __webpack_require__(12);

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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(5);

__webpack_require__(61);

var router = (0, _express.Router)();

router.use('/', function (req, res) {
    res.render('index.html');
});

exports.default = router;

/***/ },
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("ejs");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _passport = __webpack_require__(15);

var _passport2 = _interopRequireDefault(_passport);

var _bloglog = __webpack_require__(8);

var _articleModel = __webpack_require__(9);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _commentModel = __webpack_require__(10);

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
    res.json(new _result2.default(null, false, "The given body invalid", _resultCodes2.default.InvalidArguments()));
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
  _bloglog.articleService.delete(new _articleModel2.default(article_id, null, null, null, null, null, {
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

router.post('/:id/comments', function (req, res, next) {
  debugger;
  var article_id = req.params.id;
  _bloglog.commentService.add(new _commentModel2.default(null, req.body.text, req.body.user, Date.now(), article_id)).then(function () {
    return res.sendStatus(200);
  }).catch(function (errorResult) {
    return res.json(errorResult);
  });
});

exports.default = router;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _bloglog = __webpack_require__(8);

var _tagModel = __webpack_require__(11);

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
/* 49 */
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
/* 50 */
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
/* 51 */
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
		type: Array,
		default: []
	}
});

exports.default = _mongoose2.default.model('tags', tagSchema);

/***/ },
/* 52 */
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
/* 53 */
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

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleDataModel = __webpack_require__(49);

var _articleDataModel2 = _interopRequireDefault(_articleDataModel);

var _articleModel = __webpack_require__(9);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(14);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(2);

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
/* 54 */
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

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _commentDataModel = __webpack_require__(50);

var _commentDataModel2 = _interopRequireDefault(_commentDataModel);

var _commentModel = __webpack_require__(10);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _pageResult = __webpack_require__(14);

var _pageResult2 = _interopRequireDefault(_pageResult);

var _resultCodes = __webpack_require__(2);

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
    }]);
    return CommentRepository;
}();

exports.default = CommentRepository;


function MapToCommentModel(commentDataModel) {
    return new _commentModel2.default(commentDataModel._id, commentDataModel.text, commentDataModel.user, commentDataModel.createDateTime, commentDataModel.article_id);
}

/***/ },
/* 55 */
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

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagDataModel = __webpack_require__(51);

var _tagDataModel2 = _interopRequireDefault(_tagDataModel);

var _tagModel = __webpack_require__(11);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _userDataModel = __webpack_require__(52);

var _userDataModel2 = _interopRequireDefault(_userDataModel);

var _userModel = __webpack_require__(12);

var _userModel2 = _interopRequireDefault(_userModel);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _articleModel = __webpack_require__(9);

var _articleModel2 = _interopRequireDefault(_articleModel);

var _bloglog = __webpack_require__(7);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

var _resultCodes2 = _interopRequireDefault(_resultCodes);

var _bloglog2 = __webpack_require__(8);

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
              _bloglog.articleRepository.delete(articleModel).then(function (result) {
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _commentModel = __webpack_require__(10);

var _commentModel2 = _interopRequireDefault(_commentModel);

var _bloglog = __webpack_require__(7);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tagModel = __webpack_require__(11);

var _tagModel2 = _interopRequireDefault(_tagModel);

var _bloglog = __webpack_require__(7);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _md = __webpack_require__(16);

var _userModel = __webpack_require__(12);

var _userModel2 = _interopRequireDefault(_userModel);

var _bloglog = __webpack_require__(7);

var _result = __webpack_require__(1);

var _result2 = _interopRequireDefault(_result);

var _resultCodes = __webpack_require__(2);

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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./views/index.html";

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("jwt-simple");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("passport-jwt");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(46);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(45);

var _http2 = _interopRequireDefault(_http);

var _bodyParser = __webpack_require__(43);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = __webpack_require__(17);

var _config2 = _interopRequireDefault(_config);

var _bloglog = __webpack_require__(18);

var _bloglog2 = _interopRequireDefault(_bloglog);

var _bloglog3 = __webpack_require__(36);

var _bloglog4 = _interopRequireDefault(_bloglog3);

var _bloglog5 = __webpack_require__(19);

var _bloglog6 = _interopRequireDefault(_bloglog5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use(_bodyParser2.default.json());

app.use(_express2.default.static('./dist'));
app.use(_express2.default.static('./node_modules'));

app.set('view engine', 'html');
app.engine('html', __webpack_require__(44).renderFile);
app.set('views', _path2.default.join(__dirname, '/views'));

_bloglog6.default.initialize(app);

app.use('/api', _bloglog2.default);
app.use('/', _bloglog4.default);

app.server.listen(process.env.PORT || _config2.default.port);

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map