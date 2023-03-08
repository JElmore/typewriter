const { dest, parallel, series, src, watch } = require('gulp');
const autoprefixer                           = require('gulp-autoprefixer');
const gclean                                 = require('gulp-clean');
const cleanCSS                               = require('gulp-clean-css');
const rename                                 = require('gulp-rename');
const sass                                   = require('gulp-sass')(require('sass'));
const uglify                                 = require('gulp-uglify');
const zip                                    = require('gulp-zip');

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

function clean(cb) {
  src('./build/*', {read: false})
  .pipe(gclean());
  src('./package/*', {read: false})
  .pipe(gclean());
  cb();
}

function hbs(cb) {
  src('./src/**/*.hbs')
  .pipe(dest('./build'));
  cb();
}

function addDocs(cb) {
  src('./README.md')
  .pipe(dest('./build'));
  src('./LICENSE')
  .pipe(dest('./build'));
  cb();
}

function watchDirs(cb) {
    watch('./src/assets/sass/*.scss', css);
    watch('./src/assets/js/*.js', js);
    watch('./src/**/*.hbs', hbs);
    cb();
  }

function createZip(cb) {
  src('./build/**/*')
  .pipe(zip('typewriter.zip'))
  .pipe(dest('./package'));
  cb();
}

exports.build   = series(clean, css, js, hbs, addDocs, createZip);
exports.clean   = clean;
exports.default = series(clean, css, js, hbs, addDocs, createZip);
exports.package = createZip;
exports.watch   = series(clean, css, js, hbs, addDocs, watchDirs);
