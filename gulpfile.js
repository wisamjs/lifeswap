'use strict';
/* global require, console */

var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

var appFiles = ['*.js', 'client/app/**/*.js', 'server/**/*.js', 'client/app/**/*.html'];
var htmlFiles = 'client/app/**/*.html';
var jsFiles = ['*.js', 'server/**/*.js', 'client/app/**/*.js'];


gulp.task('devServer', function() {
    connect.server({
        root: 'client',
        port: 3000,
        livereload: true
    });
});

gulp.task('watch', function() {
    watch(appFiles).pipe(connect.reload());

});

gulp.task('default',['devServer','watch']);
