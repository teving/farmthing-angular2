const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
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
         },
         {
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader'],
            exclude: [helpers.root('src', 'styles')]
         },
         {
            test: /\.html$/,
            use: 'raw-loader',
            exclude: [helpers.root('src/index.html')]
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
      ),
      new CopyWebpackPlugin([
         { from: 'src/assets', to: 'assets' }
      ]),
      new HtmlElementsPlugin({
         headTags: require('./head-config.common')
      })
   ]
};
