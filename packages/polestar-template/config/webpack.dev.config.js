const webpack = require('webpack');
const path = require('path');
const os = require('os');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const appDirectory = fs.realpathSync(process.cwd());
const appDirectory = process.cwd();

const resolveApp =  relativePath => {
    let _path, separator = '\\';
    if(os.platform() !== 'win32') {
        separator = '/';
    }

    let dirArr = appDirectory.split(separator),
        lastDirName = dirArr[dirArr.length-1];
    if(lastDirName === 'create-react-nkia-app') {
        _path = path.resolve(appDirectory, 'packages/polestar-template', 'template', relativePath);
    }else {
        _path = path.resolve(appDirectory, relativePath);
    }
    
    return _path;
}

module.exports = {
	entry: {
		app: resolveApp('src/index.js')
	},
	output: {
        filename: '[name].js',
		path: resolveApp('build'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
	module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'babel-loader'
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
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveApp('src/index.html'),
        }),
    ],
    devServer: {
        inline: true,
        host: '127.0.0.1',
        port: 3000,
        contentBase: resolveApp(''),
        historyApiFallback: true,
    }
};
