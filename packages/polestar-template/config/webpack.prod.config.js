const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcssFlexbugs = require('postcss-flexbugs-fixes');

const appHtml = path.resolve(__dirname, 'src/index.html');

// build path
const buildPath = path.resolve(__dirname, 'build');
const cssFilename = 'static/[name].[contenthash:8].css';
const extractLess = new ExtractTextPlugin({
    filename: 'static/[name].less.[contenthash:8].css',
});

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk',
        ],
    },

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        path: buildPath,
        publicPath: '/',
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: 'css-loader?sourceMap',
                        options: {
                            sourceMap: true,
                        },
                    }, {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    }],
                    // use style-loader in development
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: require.resolve('style-loader'),
                    use: [
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                importLoaders: 1,
                                minimize: false,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: require.resolve('postcss-loader'),
                            options: {
                                ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                                plugins: () => [
                                    postcssFlexbugs, // require('postcss-flexbugs-fixes'),
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
                    // publicPath: "/dist"
                }),
            },
            // file-loader
            {
                exclude: [/\.(js|jsx)$/, /\.html$/, /\.less$/, /\.css$/, /\.json$/],
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
            RouteWithSubRoutes: path.resolve(__dirname, 'src/routes/RouteWithSubRoutes.js'),
            commons: path.resolve(__dirname, 'src/commons/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            services: path.resolve(__dirname, 'src/services/'),
            styles: path.resolve(__dirname, 'src/styles/'),
        },
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('1.0'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash].js',
            minChunks: (module) => {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.includes('node_modules');
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false,
                unused: true,
            },
            // mangle: false, // 난독화
            // beautify: true, // 가독성
            output: {
                comments: false,
            },
            sourceMap: true,
        }),
        extractLess,
        new ExtractTextPlugin({
            filename: cssFilename,
        }),
    ],
};
