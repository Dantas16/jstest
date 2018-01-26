//Automate common proccess
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var minify = require('gulp-minify');

gulp.task('jshint', function(){
	return gulp.src('js/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
});

gulp.task('jasmine', function(){
	return gulp.src('spec/*.js')
			.pipe(jasmine());
});

gulp.task('minify', function(){
	return gulp.src('js/*.js')
			.pipe(minify({
				ext: {
					src: '-debug.js',
					min: '.min.js'
				},
				exclude: ['tasks'],
				ignoreFiles: ['.combo.js', '-min.js']
			}))
			.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['jshint','jasmine'], function(){
	gulp.watch(['js/*.js'], ['jshint','jasmine', 'minify']);
	gulp.watch(['spec/*.js'], ['jasmine']);
});