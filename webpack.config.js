/* eslint-env node */

const {resolve} = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {

    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new ProgressBarPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
    ],
    context: resolve(__dirname, 'src'),
    resolve: {
        extensions: [
            '.js', '.jsx'
        ],
        alias: {
            scss: resolve(__dirname, 'scss/'),
            app: resolve(__dirname, 'src/app/'),
            img: resolve(__dirname, 'img/'),
            Auth: resolve(__dirname, 'src/components/Auth'),
            Pairs: resolve(__dirname, 'src/components/Pairs')
        }
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'es2015', {
                                        modules: false
                                    }
                                ],
                                'stage-2',
                                'react'
                            ],
                            plugins: ['react-hot-loader/babel']
                        }
                    }
                ],
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?modules', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [require('autoprefixer')({browsers: 'last 2 versions'})];
                            }
                        }
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader','image-webpack-loader']
            }, {
                test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
                use: 'url?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
                use: 'file-loader'
            }
        ]
    }
};
