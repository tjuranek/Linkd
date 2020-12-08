const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devServer: {
		open: true,
		port: 2000
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	]
};
