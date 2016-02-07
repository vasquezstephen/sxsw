
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon		= require('nodemon');
var sass		= require('gulp-sass');
var config 		= require("./gulp.config")();
var reload		= browserSync.stream;

// Compile Our Sass
gulp.task('sass', function() {
	return gulp.src(['src/client/**/*.scss', '!src/client/js/default/**'])
		.pipe(sass())
		.pipe(gulp.dest('src/client/css'))
		.pipe(reload())
});

gulp.task("nodemon", function(){
	var options = {
		script: config.nodeApp,
		watch: [config.server, config.client]
	};

	return nodemon(options)
		.on("start", function(){
			console.log("nodemon started");
			startBrowserSync();
		})
		.on("restart", function(){
			console.log("nodemon restarted");
		})
});

gulp.task("default", ['nodemon','sass']);

function startBrowserSync(){
	if(browserSync.active){
		return;
	}
	console.log("browserSync starting");

	var options = {
		proxy: 'localhost:' + config.nodePort,
        port: config.browserSyncPort,
		ghostMode: {
			scroll: true
		},
		browser: ["google chrome"],
		files: config.browserSyncFiles
	};
	browserSync(options);		
}