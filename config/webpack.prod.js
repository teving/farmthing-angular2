const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
   devtool: 'source-map',
   output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js'
   },
   plugins: [
      new NoEmitOnErrorsPlugin(),
      new UglifyJsPlugin({
         mangle: {
            keep_fnames: true
         }
      }),
      new DefinePlugin({
         'process.env': {
            'ENV': JSON.stringify(ENV)
         }
      })
   ]
});
