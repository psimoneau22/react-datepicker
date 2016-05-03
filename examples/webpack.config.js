var webpack = require("webpack")
var path = require("path")
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        vendor: ["react", "react-dom"],
        example: "./index.jsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                exclude: path.resolve(__dirname, "node_modules"),
                test: /\.jsx?/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "[name].js"
        })
    ]
}