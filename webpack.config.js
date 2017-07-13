var webpack = require('webpack')
var config = {
   entry: './src/entry.js',
   output: {
      path:'./dist',
      filename: 'CloudCommponent.js',
      library: "CloudComponent",
      libraryTarget: 'umd',
      umdNamedDefine: true,

   },
   externals:{
    Axios:"axios"
   },
   module: {
      loaders: [
         { test: /\.json$/, loader: 'json' },
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ["es2015-without-strict"],
               compact: false
            }
         }
      ]
   },
   plugins: [
      
    ]
}

module.exports = config;