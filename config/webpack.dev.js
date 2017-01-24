const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
   devtool: 'cheap-module-eval-source-map',
   output: {
      path: helpers.root('dist'),
      publicPath: 'http://localhost:3000',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            include: [helpers.root('src', 'styles')]
         }
      ]
   },
   devServer: {
      historyApiFallback: true,
      stats: 'minimal'
   }
});
