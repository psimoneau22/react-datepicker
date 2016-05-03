var webpack = require("webpack")
var path = require("path")
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        datePicker: "./src/datePicker.jsx",
    },
    output: {
        path: "lib",
        filename: "[name].js",
        libraryTarget: "umd",
		library: "[name]"
    },
    externals: {
		"react": "react",
		"react-dom": "react-dom"
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
    }
}