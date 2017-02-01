const webpackConfig = require('./webpack.test');

module.exports = function(config){
   config.set({
      basePath: '',
      frameworks: ['mocha', 'chai'],
      files: [
         { pattern: './config/spec-bundle.js', watched: false }
      ],
      preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']},
      webpack: webpackConfig,
      webpackMiddleware: {
         noInfo: true
      },
      reporters: ['mocha', 'coverage', 'remap-coverage'],
      coverageReporter: {
         type: 'in-memory'
      },
      remapCoverageReporter: {
         'text-summary': null,
         json: './coverage/coverage.json',
         html: './coverage/html'
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autowatch: false,
      browsers: ['PhantomJS'],
      singleRun: true
   })
}
