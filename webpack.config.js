var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: [
			'webpack-dev-server/client?http://0.0.0.0:8080',
			'webpack/hot/dev-server',
			'./app',
		],
	},
	output: {
		path: path.resolve(__dirname, 'bin'),
		publicPath: '/',
		filename: '[name].js',
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'],
				},
			},
			{
				test: /\.scss?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['style', 'css', 'sass'],
			}
		]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, "src/scss")],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './bin'),
		hot: true,
		host: '0.0.0.0',
		stats: { colors: true },
	}
};
