var webpack = require("webpack")
var path = require("path")
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        vendor: ["react", "react-dom"],
        datePicker: "./src/datePicker.jsx",
    },
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                include: path.resolve(__dirname, "src"),
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