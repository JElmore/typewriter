const { dest, series, src, watch } = require('gulp');
const autoprefixer         = require('gulp-autoprefixer');
const cleanCSS             = require('gulp-clean-css');
const rename               = require('gulp-rename');
const sass                 = require('gulp-sass')(require('sass'));
const uglify               = require('gulp-uglify');
const zip                  = require('gulp-zip');

function css(cb) {
  src('./src/assets/sass/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(rename({suffix: '.min'}))
  .pipe(cleanCSS())
  .pipe(dest('./build/assets/css'));
  cb();
}

function js(cb) {
  src('./src/assets/js/*.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('./build/assets/js'));
  cb();
}

function collect(cb) {
  src('./src/partials/*.hbs')
  .pipe(dest('./build/partials'));
  src('./src/*.hbs')
  .pipe(dest('./build'));
  src('./package.json')
  .pipe(dest('./build'));
  src('./README.md')
  .pipe(dest('./build'));
  src('./LICENSE')
  .pipe(dest('./build'));
  cb();
}

function watchDirs(cb) {
    watch('./src/assets/sass/*.scss', sass);
    watch('./src/assets/js/*.js', js);
    watch('./src/partials/*.hbs', collect);
    watch('./src/*.hbs', collect);
    cb();
  }

function createTheme(cb) {
  src('./build/**/*')
  .pipe(zip('typewriter.zip'))
  .pipe(dest('./package'));
  cb();
}

exports.build   = series(css, js, collect)
exports.default = series(css, js, collect, watchDirs)
exports.package = createTheme

