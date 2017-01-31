// Karma configuration
// Generated on Sun Jan 29 2017 12:32:37 GMT+0300 (Беларусь (зима))

module.exports = function(config) {
  config.set({

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

      './src/tests/*.tests.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/bloglog.ui/app/services/comment.service.js': ['coverage'],
      './src/bloglog.ui/app/article/articles.component.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // customLaunchers: {
    //   'PhantomJS_custom': {
    //     base: 'PhantomJS',
    //     options: {
    //       windowName: 'my-window',
    //       settings: {
    //         webSecurityEnabled: false
    //       },
    //     },
    //     flags: ['--load-images=true'],
    //     debug: true
    //   }
    // },

    // phantomjsLauncher: {
    //   // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
    //   exitOnResourceError: true
    // },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
