const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const stylesDirectory = helpers.root('src', 'styles');

module.exports = webpackMerge(commonConfig, {
   devtool: 'inline-source-map',
   output: {
      path: helpers.root('dist'),
      publicPath: 'http://localhost:3000',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
   },
   module: {
      rules: [
         {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
         },
         {
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'source-map-loader'
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            include: [stylesDirectory]
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: [stylesDirectory]
         }
      ]
   },
   resolve: {
      extensions: ['.ts', '.js']
   },
   devServer: {
      historyApiFallback: true,
      stats: 'minimal',
      port: 3000
   }
});
