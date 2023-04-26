const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const postcss = require('gulp-postcss');
const webserver = require('gulp-webserver');

gulp.task('default', function () {
  return gulp.watch('sass/**/*.scss', function () {
  return gulp.src('sass/**/*.scss')
  .pipe(sass({
  outputStyle: 'expanded'
  })
  .on('error', sass.logError))
  .pipe(postcss([
    autoprefixer({
      cascade: false
    })
  ]))
  .pipe(gulp.dest('css'));
  });
});

gulp.task('webserver', function() {
  return gulp.src('./index.html')
  .pipe(webserver({
    host:'localhost',
    port: 8000,
    liverload: true,
    open: true
  }));
});