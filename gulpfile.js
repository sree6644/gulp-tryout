var gulp = require('gulp'),
	gutil = require('gulp-util');

gulp.task('default', function () {
	return gutil.log('hello sriram v2 with local git config');
});

gulp.task('maintask', function () {
	return gutil.log('main task');
});


gulp.task('subtask', ['maintask'], function () {
	return gutil.log('depedentent task');
});