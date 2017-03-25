const webpackConfig = require('./webpack.test');

module.exports = function(config){
   config.set({
      basePath: '',
      frameworks: ['mocha', 'chai'],
      files: [
         { pattern: './config/spec-bundle.js', watched: false },
         { pattern: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBeY0snjiW8-Yu-sc4nhb4nc3D-aek1-vQ&libraries=places', watched: false },
         { pattern: './src/assets/**/*', watched: false, included: false, served: true, nocache: false }
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
