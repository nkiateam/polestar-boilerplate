const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const appHtml = __dirname + '/src/index.html';

// build path
const buildPath = path.resolve(__dirname, 'build');
const cssFilename = 'static/[name].[contenthash:8].css';

const pathsToClean = ['build'];

module.exports = {
	entry: {
		app: __dirname + '/src/index.js'
	},
	output: {
		filename: '[name].[chunkhash:8].js',
		chunkFilename: '[name].[chunkhash:8].chunk.js',
		path: buildPath,
        publicPath: '/'
    },
	devtool: 'source-map',
	module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
						presets: ['react', 'es2015'],
						plugins: [
							'transform-object-rest-spread',
							'transform-class-properties'
						]
                    }
                }]
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
					//publicPath: "/dist"
				}),
            },
            // file-loader
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
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
        ]
    },
	plugins: [
  		new webpack.DefinePlugin({
			'process.env': {
        		NODE_ENV: JSON.stringify('production')
      		},
			PRODUCTION: JSON.stringify(true),
  			VERSION: JSON.stringify('1.0')
		  }),
		new HtmlWebpackPlugin({
            inject: true,
            template: appHtml,
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				comparisons: false,
			},
			output: {
				comments: false,
			},
			sourceMap: true,
		}),
		new ExtractTextPlugin({
      		filename: cssFilename,
		}),
		new CleanWebpackPlugin(pathsToClean),
	]
}