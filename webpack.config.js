var webpack = require("webpack")
var path = require("path")

module.exports = {
    entry: {
        datePicker: "./src/datePicker.jsx",
    },
    output: {
        path: "dist",
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