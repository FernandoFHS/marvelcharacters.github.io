const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')
const gulpNgConfig = require('gulp-ng-config');


require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default', () => {
  if(util.env.production) {
    sequence('deps', 'app')
    
    gulp.src('config.json')
      .pipe(gulpNgConfig('ENV', {environment: 'production'}))
      .pipe(gulp.dest('public/assets/js'));
  } else {
    sequence('deps', 'app', 'server')
    gulp.src('config.json')
      .pipe(gulpNgConfig('ENV', {environment: 'local'}))
      .pipe(gulp.dest('public/assets/js'));
  }
})