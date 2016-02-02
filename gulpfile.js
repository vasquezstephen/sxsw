// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var reload = browserSync.stream;

//HTML Task
gulp.task('html', function() {
    return gulp.src(['webroot/**/*.html', '!webroot/js/default/**'])
        .pipe(reload());
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['webroot/**/*.js', '!webroot/js/default/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(['webroot/**/*.scss', '!webroot/js/default/**'])
        .pipe(sass())
        .pipe(gulp.dest('webroot/css'))
        .pipe(reload());
});



// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['webroot/**/*.js' ,'!webroot/js/default/**'])
        .pipe(concat('all.js'))
        //.pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        //.pipe(gulp.dest('dist'))
        .pipe(reload());
});

// Watch Files For Changes
gulp.task('watch', function() {
    browserSync({
        server: {
            baseDir: 'webroot'
        }
    });
    gulp.watch('webroot/**/*.html' , ['html']);
    gulp.watch('webroot/**/*.js', ['lint', 'scripts']);
    gulp.watch('webroot/**/*.scss', ['sass']);
});



// Default Task
gulp.task('default', ['html', 'lint', 'sass', 'scripts', 'watch']);