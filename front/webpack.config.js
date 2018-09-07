const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/src'),
		filename: 'bundle.js'
	},
	mode: 'development'
}
