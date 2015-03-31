var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var bundler = watchify(browserify(watchify.args));

bundler.add('./src/directives/hyper-content.js');
bundler.add('./src/directives/hyper-yield.js');

bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle() {
  return bundler.transform('browserify-ngannotate', { 'single_quotes': true })
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Bundle Error'))
    .pipe(source('hyper-content-for.js'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('bundle', bundle);

gulp.task('build', ['bundle']);

gulp.task('default', ['build']);
