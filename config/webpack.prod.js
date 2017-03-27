const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const stylesDirectory = helpers.root('src', 'styles');

module.exports = webpackMerge(commonConfig, {
   devtool: 'source-map',
   output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js'
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
               fallbackLoader: 'style-loader',
               loader: 'css-loader'
            }),
            include: [stylesDirectory]
         },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader!sass-loader'
            }),
            include: [stylesDirectory]
         }
      ]
   },
   plugins: [
      new DefinePlugin({
         'process.env': {
            'ENV': JSON.stringify(ENV)
         }
      }),
      new ExtractTextPlugin('[name].[contenthash].css'),
      new NoEmitOnErrorsPlugin(),
      new UglifyJsPlugin()
   ]
});
