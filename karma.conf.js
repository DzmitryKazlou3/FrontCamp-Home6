// Karma configuration
// Generated on Sun Jan 29 2017 12:32:37 GMT+0300 (Беларусь (зима))

module.exports = {

  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '',


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['jasmine'],


  // list of files / patterns to load in the browser
  files: [
    './node_modules/angular/angular.js',
    './node_modules/angular-mocks/angular-mocks.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/angular-aria/angular-aria.min.js',
    './node_modules/angular-messages/angular-messages.min.js',
    './node_modules/angular-cookies/angular-cookies.min.js',
    './node_modules/angular-animate/angular-animate.min.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    './node_modules/angular-material/angular-material.js',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',

    // './dist/app/app.bundle.js',
    './src/bloglog.ui/app/app.module.js',
    './src/bloglog.ui/app/constants.js',
    './src/bloglog.ui/app/services/http-iterceptor.service.js',
    './src/bloglog.ui/app/services/comment.service.js',
    './src/bloglog.ui/app/article/articles.component.js',
    './src/bloglog.ui/app/common/paging.directive.js',

    './src/tests/*.tests.js'
  ],


  // list of files to exclude
  exclude: [
  ],

  // web server port
  port: 9876,


  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['spec', 'coverage'],

  coverageReporter: {
    type: 'html',
    dir: 'coverage/'
  },


  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,


  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['Chrome'],


  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: false

}