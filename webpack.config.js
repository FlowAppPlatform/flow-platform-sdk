var webpack = require('webpack')
var config = {
    entry: './src/Component.js',
    output: {
        path: './dist',
        filename: 'CloudBoostFlow.js',
        library: "CloudBoostFlow",
        libraryTarget: 'umd',
        umdNamedDefine: true,

    },
    externals: {
        Axios: "axios"
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