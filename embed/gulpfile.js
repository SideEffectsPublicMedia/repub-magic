var gulp = require('gulp'),
    rollup = require('rollup-stream'),
    source = require('vinyl-source-stream');

gulp.task('build', function() {
  return rollup('rollup.config.js')
    .pipe(source('republish.js'))
    .pipe(gulp.dest('./build'));
});