const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appHtml = path.resolve(__dirname, 'src/index.html');

// build path
const buildPath = path.resolve(__dirname, 'build');
const cssFilename = 'static/[name].[contenthash:8].css';

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src/index.js')
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
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
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
	
	resolve: {
        alias: {
            RouteWithSubRoutes: path.resolve(__dirname, 'src/routes/RouteWithSubRoutes.js'),
            commons: path.resolve(__dirname, 'src/commons/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            styles: path.resolve(__dirname, 'src/styles/')
        }
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
			},
			output: {
				comments: false,
			},
			sourceMap: true,
		}),
		new ExtractTextPlugin({
      		filename: cssFilename,
		}),
	]
}