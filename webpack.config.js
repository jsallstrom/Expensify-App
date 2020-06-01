const path = require('path'); // We gotta use this to use the __dirrname for our current working directorys absolute path

// entry point -> input file

console.log(__dirname); // apperently the __dirrname is a variable that will ALWAYS return the current computers absolute path for its current working directory
// This is used so that Whomever is currently working on the project will have their own current directory used
// because hardcoding that would create errors

module.exports = {
	entry: './src/app.js', // Entry: is where you tell webpack to start looking for the main file for the app, change this to a file in playground in case you wanna play with that
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
						babelrc: true, // Tells it to use the .babelrc file and all the stuff written there (I finally got it to work)!
						
					}
				}
			},
			{
				// target all .scss files and (with the help of the "?" optionally also all .css files)
				test: /\.s?css$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'), // send path to the folder where we write the code we wanna use to load the website,
		historyApiFallback: true // this makes sure that when we use react-router and load a page www.johnnysell.com/home it will not try to find a NEW ANother website with
		// that exact url ../home on the end because this line will make sure it understands that /home iS part of the original website and that
		// react-router will figure it out

		// in this case our public folder where we create through babel our bundle.js file
		// also gotta write an npm script for this
	}
};
