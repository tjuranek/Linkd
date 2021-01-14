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
	module: {
		rules: [
			{
				test: /\.(css)$/,
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
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new Dotenv({
			systemvars: true
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
