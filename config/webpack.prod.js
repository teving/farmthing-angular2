const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

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
      })
   ]
});
