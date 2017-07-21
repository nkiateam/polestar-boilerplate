const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		'react-kendo-ui': './src/index.js',
        'app.bundle': './examples/src/index.js'
	},
	output: {
        filename: '[name].js',
		path: path.resolve(__dirname, 'examples', 'build'),
        publicPath: '/examples/build',
		library: 'K',
		libraryTarget: 'umd'
	},
	module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }]
            }
        ]
    },

    devServer: {
        inline: true,
        host: '127.0.0.1',
        port: 3000,
        contentBase: __dirname + '/',
    }
};
