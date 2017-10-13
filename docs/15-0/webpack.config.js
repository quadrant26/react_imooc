var path = require('path');
var Webpack = require("webpack");

module.exports = {
    context: __dirname + "/src",
    entry : './js/root.js',
    output : {
        path: path.resolve(__dirname, "/build/js"),
        filename: "bundle.js"
    },
    module : {
        rules : [
            { 
                test : /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test : /\.css$/,
                use : ['css-loader', 'style-loader']
            }
        ]
    }
}