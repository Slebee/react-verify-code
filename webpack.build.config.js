var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
process.env.NODE_ENV = 'production';

module.exports = {
	entry: {
		index: ['./src/react-verify-code.js']
	},
	output: {
		path: path.resolve(ROOT_PATH, 'dist'),
		filename: '[name].js'
	},
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
      },
	module: {
		loaders: [
			{
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                	presets: ['es2015', 'stage-0', 'react']
                },
                include: [
                  path.join(__dirname, 'src')
                ]
            }
		]
	},
	resolve: {
        extensions: ['.js', '.jsx', '.less', '.css'] //后缀名自动补全
    },
    plugins: [

    new webpack.optimize.AggressiveMergingPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false,
        },
        compress: {
            warnings: false,
            drop_console: true
        },
    }),
    ]
};