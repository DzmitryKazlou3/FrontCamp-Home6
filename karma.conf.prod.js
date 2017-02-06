let configObject = require('./karma.conf.js');

module.exports = function (config) {
  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  configObject.preprocessors = {
    './src/bloglog.ui/app/services/comment.service.js': ['coverage'],
    './src/bloglog.ui/app/article/articles.component.js': ['coverage'],
    './src/bloglog.ui/app/common/paging.directive.js': ['coverage'],
    './src/bloglog.ui/app/article/article-detail.component.js': ['coverage']
  };

  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  configObject.logLevel = config.LOG_INFO;

  // enable / disable watching file and executing tests whenever any file changes
  configObject.autoWatch = false;

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  configObject.singleRun = true;

  config.set(configObject);
}