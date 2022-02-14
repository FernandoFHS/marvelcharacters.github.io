const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets', 'build-css'])

gulp.task('app.html', () => {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
})

gulp.task('app.css', () => {
  return gulp.src('app/**/*.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('build-css', function() {  
  return gulp.src('app/**/*.scss')
      .pipe(sass())
      .pipe(concat('app.min.css'))
      .pipe(gulp.dest('public/assets/scss'));
});

gulp.task('app.js', () => {
  return gulp.src('app/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets', () => {
  return gulp.src('app/assets/**/*.*')
    .pipe(gulp.dest('public/assets'))
})