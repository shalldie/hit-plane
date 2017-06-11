const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "hitplane": './src/loader'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            }
            // , {
            //     test: /\.(jpg|png|gif)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {          // 天知道这里的配置是怎么回事，我 👀 都要瞎了
            //             name: 'img/[name].[ext]'
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // html模板文件
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
            // // hash: true,
            minify: { removeComments: true, collapseWhitespace: true, minifyJS: true, minifyCSS: true },
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new CopyWebpackPlugin([    // 拷贝文件
            {
                from: 'img',
                to: 'img'
            }
        ])
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json', '.scss']
    }
};