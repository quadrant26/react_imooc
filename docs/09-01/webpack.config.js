var path = require('path');
var Webpack = require("webpack");

module.exports = {
    context: __dirname + "/src",
    entry: "./js/index.js",
    output: {
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
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options : {
                            modules : true,
                            localIdentName : '[path][name]_[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    }
}