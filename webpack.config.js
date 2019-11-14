const path = require('path'); // We gotta use this to use the __dirrname for our current working directorys absolute path

// entry point -> output file

console.log(__dirname); // apperently the __dirrname is a variable that will ALWAYS return the current computers absolute path for its current working directory
// This is used so that Whomever is currently working on the project will have their own current directory used
// because hardcoding that would create errors

module.exports = {
	entry: './src/app.js', // Entry: is where you tell webpack to start looking for the main file for the app
	output: {
		// this is the folder where you want your fixed files to end up in (public/dist/prod)-folder
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		// in modules we can define rules what webpack will do with scss-files (), how to minimize .js files and other stuff
		rules: [
			{
				// in this specific example we will use the all powerful babel to convert the .js files
				test: /\.js$/, // this is a regex that says, 'with all files that end with .js', (all javascript files)
				exclude: /node_modules/, // BUT you can skip all the .js files in node_modules, theyve already been ok'd because they are part of our dependencies

				use: {
					loader: 'babel-loader', // use the babel loader you ve imported in dependencies in package.json
					options: {
						presets: [ 'babel-preset-env', 'babel-preset-react' ]
						//  these presets where specified previously in teh command line at the end you know before --watch
						// presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			}
		]
	}
};
