const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const postcss = require('gulp-postcss');

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