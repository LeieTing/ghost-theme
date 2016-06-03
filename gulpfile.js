var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('screen.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['styles']);

gulp.task('watch', ['default'], function() {
  gulp.watch('src/sass/**/*.scss', ['styles']);
});
