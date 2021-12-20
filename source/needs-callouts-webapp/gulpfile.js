const del = require("del");
const gulp = require("gulp");
const { parallel, series } = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const gulpif = require("gulp-if");

//  Paths to non-mininified vendor stylesheets.
const vendorStyles = [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/flatpickr/dist/flatpickr.css",
    "node_modules/font-awesome/css/font-awesome.css",
];

const siteStyles = ["wwwroot-dev/sass/**/*.scss"];

gulp.task("test", function () {
    gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/flatpickr/dist/flatpickr.css",
        "node_modules/font-awesome/css/font-awesome.css",
        "wwwroot-dev/sass/**/*.scss",
    ])
        .pipe(gulpif("*.scss", sass({ outputStyle: "expanded" })))
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest("wwwroot/css"));
});
