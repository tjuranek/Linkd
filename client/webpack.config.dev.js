const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devServer: {
		open: true,
		port: 2000,
		historyApiFallback: true
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				use: ['babel-loader']
			},
			{
				test: /\.jsx$/,
				include: path.resolve(__dirname, 'src'),
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new Dotenv({
			path: './.env.dev'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	]
};
