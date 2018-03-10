'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var fs = require('fs');
var browserify = require('browserify');
var runSequence = require('run-sequence');


gulp.task('sass', function() {
  return gulp.src('dev/sass/primary.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});


gulp.task('babel', function() {
  return browserify("dev/js/index.js")
  .transform("babelify", { presets: ["es2015"] })
  .bundle()
  .pipe(fs.createWriteStream("dist/index.js"))
});


gulp.task('watch', function() {
  gulp.watch('./dev/sass/**/*.scss', ['sass']);
  gulp.watch('./dev/js/**/*.js', ['babel']);
});


// sass task runs first to create the dist folder
// saved having to write anything additional to get
// babel to generate the folder instead of erroring.
gulp.task('default', function() {
  runSequence('sass', ['babel', 'watch']);
});