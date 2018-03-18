var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync','sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task("uglify", function () {
    return gulp.src("app/js/**/*.js")
        .pipe(rename("main.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
  .pipe(cache(imagemin({
      // Setting interlaced to true
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});


gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
})

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'uglify', 'images'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})
