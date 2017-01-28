"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    fileinclude = require("gulp-file-include"),
    autoprefixer = require('gulp-autoprefixer');

gulp.task("css", function () {

    gulp.src('style/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./style'));

});


gulp.task('html', function () {
    gulp.src(['html-include/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./html-final'))
});

gulp.task("watch", function () {

    gulp.watch("style/*/*.sass", ["css"]);
    gulp.watch("style/main.sass", ["css"]);
    gulp.watch("html-include/*.html", ["html"]);
    gulp.watch("html-include/components/*.html", ["html"]);

});

gulp.task("default", [

    "css",
    "html",
    "watch"

]);

