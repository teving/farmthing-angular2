const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers');

module.exports = {
   entry: {
      polyfills: './src/polyfills.ts',
      vendor: './src/vendor.ts',
      app: './src/main.ts'
   },
   resolve: {
      extensions: ['.ts', '.js']
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: ['awesome-typescript-loader', 'angular2-template-loader']
         }
      ]
   },
   plugins: [
      new CommonsChunkPlugin({
         name: ['app', 'vendor', 'polyfills']
      }),
      new HtmlWebpackPlugin({
         template: 'src/index.html'
      }),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
        helpers.root('src')
     )
   ]
};
