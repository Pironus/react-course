// entry --> output place for bundle.js
const path = require('path')
console.log(__dirname)
const path_ = path.join(__dirname, 'public')

module.exports = {
    entry: "./src/app.js",
    output: {
        //needs to be absolute path
        path: path_,
        filename: "bundle.js"
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

}


