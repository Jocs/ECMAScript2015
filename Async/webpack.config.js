module.exports = {
	entry: ['babel-polyfill', './async.js'],
	output: {
		path:'./',
		filename:'bundle.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: "babel-loader"
	    }
	  ]
	}
};