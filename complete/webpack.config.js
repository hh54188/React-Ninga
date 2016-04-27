module.exports = {
	entry: './main.js',
	output: {
	    filename: 'bundle.js'       
	},
	resolve: {
		modulesDirectories: ['../node_modules']
	},
	module: {
		loaders: [
		    {
		        test: /.jsx?$/,
		        loader: 'babel-loader',
		        query: {
		        	// http://stackoverflow.com/questions/34574403/how-to-set-resolve-for-babel-loader-presets/
		        	presets: [
				        require.resolve('babel-preset-es2015'),
				        require.resolve('babel-preset-react'),
				    ]
		          // presets: ['../node_modules/babel-preset-es2015', '../node_modules/babel-preset-react']
		          // presets: ['es2015', 'react']
		          // presets: ['babel-preset-es2015', 'babel-preset-react']
		        }
		    }
		]
	}
}