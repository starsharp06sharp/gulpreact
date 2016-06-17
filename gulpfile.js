'use strict';

var gulp = require('gulp');
var uglify = require("gulp-uglify");
var browserify = require('browserify');
var babelify = require('babelify'); 
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var connect = require('gulp-connect');

gulp.task('build', function () {
    var b = browserify({
        entries: './src/app.jsx',
        transform: [babelify.configure({ presets: ['react', 'es2015'] })]
    });
    return b.bundle()
            .pipe(source('app.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/*.jsx', ['build']);
});

gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true,
        port: 3000
    });
});

gulp.task('dev', ['connect', 'watch']);
