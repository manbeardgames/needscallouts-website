const del = require("del");
const { parallel, series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");


gulp.task("build-styles", function () {

})

gulp.task("build-site-css", function () {
    return gulp
        .src("wwwroot/css/site.scss")
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(rename("site.css"))
        .pipe(gulp.dest("wwwroot/dist/css"));
});

gulp.task("build-site-min-css", function () {
    return gulp
        .src("wwwroot/css/site.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(rename("site.min.css"))
        .pipe(gulp.dest("wwwroot/dist/css"));
});

gulp.task(
    "build-site-styles",
    parallel("build-site-css", "build-site-min-css")
);

gulp.task("clean-site-styles", function () {
    return del("wwwroot/dist/css");
});

gulp.task(
    "rebuild-site-styles",
    series("clean-site-styles", "build-site-styles")
);
