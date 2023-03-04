const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const rename       = require('gulp-rename');
const gsass        = require('gulp-sass')(require('sass'));
const zip          = require('gulp-zip');

function sass(cb) {
  gulp.src('./src/assets/sass/*.scss')
  .pipe(gsass())
  .pipe(autoprefixer())
  .pipe(rename({suffix: '.min'}))
  .pipe(cleancss())
  .pipe(gulp.dest('./build/assets/css'));
  cb();
}

function collect(cb) {
  gulp.src('./src/assets/js/*.js')
  .pipe(gulp.dest('./build/assets/js'));
  gulp.src('./src/partials/*.hbs')
  .pipe(gulp.dest('./build/partials'));
  gulp.src('./src/*.hbs')
  .pipe(gulp.dest('./build'));
  gulp.src('./package.json')
  .pipe(gulp.dest('./build'));
  gulp.src('./README.md')
  .pipe(gulp.dest('./build'));
  gulp.src('./LICENSE')
  .pipe(gulp.dest('./build'));
  cb();
}

function watch(cb) {
    gulp.watch('./src/assets/sass/*.scss', sass);
    cb();
  }

function package(cb) {
  gulp.src('./build/**/*')
  .pipe(zip('typewriter.zip'))
  .pipe(gulp.dest('./package'));
  cb();
}

exports.build   = gulp.series(sass, collect)
exports.default = watch
exports.package = gulp.series(sass, collect, package)
