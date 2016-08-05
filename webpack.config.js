global.Promise = require('bluebird'); //for node 0.10
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var env = process.env.NODE_ENV || 'development';

var config = {
	devtool: (env === 'production') ? 'cheap-module-source-map' : 'inline-source-map',

	entry: [
		'./client/index.js'
	],
	output: {
		path: __dirname + '/themes/bartik_subtheme/js/build',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath: '/themes/bartik_subtheme/js/build/'
	},
	/*
	output: {
		path: __dirname + '/public/build',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath: '/build/'
	},
	*/
	module: {
		loaders: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /public/],
				query: {
					presets: ['react', 'es2015', 'stage-0']

				}
			},

			{
				test: /\.json$/,
				loader: 'json'
			},

			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
			},

			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
			},

			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
			},

			{
				test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
				loader: 'url-loader?mimetype=application/font-woff'
			},

			{
				test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
				loader: 'file-loader?name=[name].[ext]'
			},

			{
				test: /\.(png|gif)$/,
				loader: 'url-loader?mimetype=image/png'
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				BROWSER: JSON.stringify(true),
				NODE_ENV: JSON.stringify(env)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin('shared.js'),
		new ExtractTextPlugin('[name].css')
	],

	postcss: function() {
		return [autoprefixer, precss]
	}
}

if (env === 'production') {
	config.plugiins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;