const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const rename       = require('gulp-rename');
const gsass        = require('gulp-sass')(require('sass'));

function sass(cb) {
  gulp.src('./assets/sass/*.scss')
  .pipe(gsass())
  .pipe(autoprefixer())
  .pipe(rename({suffix: '.min'}))
  .pipe(cleancss())
  .pipe(gulp.dest('./assets/css'));
  cb();
}

function watch(cb) {
    gulp.watch('./assets/sass/**/*.scss', sass);
    cb();
  }

exports.default = sass
exports.build = sass
exports.watch = watch
