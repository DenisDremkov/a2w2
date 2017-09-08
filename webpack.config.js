const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const developmentServer = require('./webpack/devServer.js')();
const merge = require('webpack-merge');
const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};



const commonConfig = {
	
	entry: {
		app: PATHS.source + '/main.ts',
		vendor: PATHS.source + '/vendor.ts'
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.ts$/, 
				loader: 'ts-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
			}
		]
	},
	resolve: {
		extensions: [ ".ts", ".js" ]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Ang2',
			minify: {
				collapseWhitespace: true
			},
			template: 'src/index.html',
			hash: true 							    // if true then append a unique webpack compilation hash to all included scripts and CSS files. This is useful for cache busting.
		})
	] 
}



module.exports = function(environment) {
	if ( environment === 'production' ) {
		return commonConfig;
	}
	if (environment === 'development') {
		return merge([
			commonConfig,
			developmentServer
		]);
	}
}
