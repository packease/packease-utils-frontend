var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

var paths = {
    scripts: ['javascript/*.js'],
    css: ['css/*.css']
};

gulp.task('clean', function() {
    return del(['javascript/dist']);
});

// Concat & Minify JS
gulp.task('minify', ['clean'], function(){
    return gulp.src('javascript/*.js')
        .pipe(concat('pe-utils.js'))
        .pipe(gulp.dest('javascript/dist'))
        .pipe(rename('pe-utils.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('javascript/dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['minify']);
    gulp.watch(paths.css, ['minify']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'minify']);