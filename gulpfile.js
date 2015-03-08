var gulp = require('gulp');
var sass = require('gulp-sass');
var notify  = require('gulp-notify');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("<%= error.message %>")
         }))
        .pipe(sass())
        .pipe(gulp.dest('./prod/css'));
});

gulp.task('copy', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./prod'));
});


gulp.task('server', function() {
   gulp.src('prod')
    .pipe(webserver({
        livereload: true,
    }));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/*.html', ['copy']);
});

gulp.task('notify', function() {
    notify.onError("<%= error test %>");
});

gulp.task('default', ['sass', 'server', 'watch', 'copy']);
