var webpack = require("webpack")
var path = require("path")

module.exports = [
    {
        entry: {       
            datePicker: "./src/datepicker",
            shufflebox: "./src/shufflebox"
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
                },
                {
                    include: path.resolve(__dirname, "src"),
                    test: /\.(c|le)ss$/,
                    loader: "style!css!less"
                }
            ]
        },
        resolve: {
            extensions: ["", ".js", ".jsx"]
        }
    },
    
    {
        entry: {  
            vendor: ["react", "react-dom"],
            example: "./example/index.jsx"
        },
        output: {
            path: "example",
            filename: "[name].js"
        },
        module: {
            loaders: [
                {
                    exlude: [path.resolve(__dirname, "node_modules")],
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
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "[name].js"
            })
        ]
    }
]