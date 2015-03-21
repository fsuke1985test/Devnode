var gulp      = require('gulp');
var sass      = require('gulp-sass');
var notify    = require('gulp-notify');
var plumber   = require('gulp-plumber');
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
    gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./prod/'));
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./prod/js'));
});

gulp.task('server', function() {
   gulp.src('./prod/html')
    .pipe(webserver({
        livereload: true,
    }));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('./src/js/*.js');
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/html/*.html', ['copy']);
    gulp.watch('./src/java/*.java', ['copy']);
});

gulp.task('notify', function() {
    notify.onError("<%= error test %>");
});


gulp.task('default', ['sass', 'server', 'watch', 'copy']);
//gulp.task('default', ['server', 'watch', 'copy']);
