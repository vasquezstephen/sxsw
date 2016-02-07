
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon		= require('nodemon');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var reload		= browserSync.stream;
var config 		= require("./gulp.config")();

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
		watch: config.server
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

gulp.task("default", ['sass','nodemon']);

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