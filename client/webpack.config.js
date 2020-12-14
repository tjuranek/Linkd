const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devServer: {
		open: true,
		port: 2000
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
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	]
};
