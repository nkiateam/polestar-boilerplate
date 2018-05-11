const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const POLESTAR_UI_KIT_PACKAGE_PATH = path.resolve(__dirname, '../../../node_modules/polestar-ui-kit/lib/packages');
const port = 3333;

function isDirectory(dir) {
    return fs.lstatSync(dir).isDirectory();
}

module.exports = {

    devtool: 'inline-source-map',

    entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const isDraft = dir.charAt(0) === '_' || dir.indexOf('components') >= 0;

        if (!isDraft && isDirectory(path.join(__dirname, dir))) {
            entries[dir] = path.join(__dirname, dir, 'index.js');
        }

        return entries;
    }, {}),

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/build/',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    extends: path.resolve(__dirname, '../config/.babelrc'),
                },
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                }],
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ],
            },
            // file-loader
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.less$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            // url-loader
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
        ],
    },

    resolve: {
        alias: {
            RouteWithSubRoutes: path.resolve(__dirname, 'polestar/routes/RouteWithSubRoutes.js'),
            commons: path.resolve(__dirname, 'polestar/commons/'),
            pages: path.resolve(__dirname, 'polestar/pages/'),
            services: path.resolve(__dirname, 'polestar/services/'),
            styles: path.resolve(__dirname, 'polestar/styles/'),
            'react-ztree': path.resolve(POLESTAR_UI_KIT_PACKAGE_PATH, './react-ztree/src/'),
            'react-qtip': path.resolve(POLESTAR_UI_KIT_PACKAGE_PATH, './react-qtip/src/'),
            'polestar-icons': path.resolve(POLESTAR_UI_KIT_PACKAGE_PATH, './polestar-icons/src/'),
            'react-try-catch': path.resolve(POLESTAR_UI_KIT_PACKAGE_PATH, './react-try-catch/src/'),
        },
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commons'),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['login', 'commons'],
            filename: 'login.html',
            template: path.resolve(__dirname, 'login/index.html'),
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['polestar', 'commons'],
            filename: 'polestar.html',
            template: path.resolve(__dirname, 'polestar/index.html'),
        }),
    ],

    devServer: {
        inline: true,
        host: 'localhost',
        port,
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
    },
};
