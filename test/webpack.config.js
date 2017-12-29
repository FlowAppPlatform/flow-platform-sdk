var webpack = require('webpack')
var config = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'index.js',
        library: "cloudboost-flow",
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        loaders: [{
                test: /\.json$/,
                loader: 'json'
            },
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