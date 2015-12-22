module.exports = {
	entry: './async.js',
	output: {
		path:'./',
		filename:'bundle.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: "babel",
	      query: {
	        presets: ['es2015', 'stage-3']
	      }
	    },
	  ]
	}
};