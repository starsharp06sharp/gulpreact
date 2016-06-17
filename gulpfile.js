'use strict';

var gulp = require('gulp');
var uglify = require("gulp-uglify");
var browserify = require('browserify');
var reactify = require('reactify'); 
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

gulp.task('build', function () {
    var b = browserify({
        entries: './src/app.jsx',
        transform: [reactify]
    });
    return b.bundle()
            .pipe(source('app.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest('./build/'));
});