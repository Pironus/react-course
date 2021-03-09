// entry --> output place for bundle.js
const path = require('path')
const path_ = path.join(__dirname, 'public')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = (env) =>{

    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css') 

    return{
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                 })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }

 }




