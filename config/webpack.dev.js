const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

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
            include: [helpers.root('src', 'styles')]
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
