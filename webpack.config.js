const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const ENTRY = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT = path.join(__dirname, 'static');
const MODE = process.env.WEBPACK_ENV;

const config = {
    entry: ENTRY,
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins() {
                                    return [autoprefixer({ browsers: "cover 99.5%" })];
                                }
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    output: {
        path: OUTPUT,
        filename: "[name].js"
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css'
    })]
}

module.exports = config;