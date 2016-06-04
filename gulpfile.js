var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

var styleSource = 'src/sass/**/*.scss';
var scriptSource = 'src/js/**/*.js';

function processStyles(stream) {
    return stream
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('screen.css'))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }));
}

function processScripts(stream) {
  return stream
    .pipe(babel({
      presets: ['es2015']
    }));
}

gulp.task('styles', function() {
  var stream = gulp.src(styleSource)
    .pipe(sourcemaps.init());

  return processStyles(stream)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('production-styles', function() {
  var stream = gulp.src(styleSource);

  return processStyles(stream)
    .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts', function() {
  var stream = gulp.src(scriptSource)
    .pipe(sourcemaps.init());

  return processScripts(stream)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'));
})

gulp.task('production-scripts', function() {
  var stream = gulp.src(scriptSource);

  return processScripts(stream)
    .pipe(gulp.dest('assets/js'));
})

gulp.task('production', ['production-styles', 'production-scripts']);

gulp.task('default', ['styles', 'scripts']);

gulp.task('watch', ['default'], function() {
  gulp.watch(scriptSource, ['scripts']);
  gulp.watch(styleSource, ['styles']);
});
