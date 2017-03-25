const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const helpers = require('./helpers');

module.exports = {
   devtool: 'inline-source-map',
   resolve: {
      extensions: ['.ts', '.js']
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: [
               {
                  loader: 'awesome-typescript-loader',
                  query: {
                     sourceMap: false,
                     inlineSourceMap: true,
                     compilerOptions: {
                        removeComments: true
                     }
                  }
               },
               'angular2-template-loader'
            ]
         },
         {
            test: /\.css$/,
            loader: ['to-string-loader', 'css-loader']
         },
         {
            test: /\.html$/,
            loader: 'raw-loader'
         },
         {
            enforce: 'post',
            test: /\.(js|ts)$/,
            loader: 'istanbul-instrumenter-loader',
            include: helpers.root('src'),
            exclude: [
               /\.spec\.ts$/,
               /node_modules/
            ]
         }
      ]
   },
   plugins: [
      new ContextReplacementPlugin(
         /angular(\\|\/)core(\\|\/)@angular/,
         helpers.root('src')
      )
   ]
}
