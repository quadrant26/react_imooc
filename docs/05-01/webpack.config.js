var Webpack = require("webpack");

module.exports = {
    context: __dirname + '/src',
    entry : './js/index.js',
    output : {
        path : __dirname + '/src/',
        filename : 'bundle.js'
    },
    modules : {
        loaders : [
            { 
                test : /\.js?$/, 
                exclude: /(node_modules)/, 
                loader: 'babel-loader', 
                query : ['react', 'es2015'] 
            }
        ]
    }
}