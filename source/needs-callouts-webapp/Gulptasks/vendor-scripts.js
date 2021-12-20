const del = require("del");
const { parallel, series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");

//  Paths to non-mininified vendor scripts.
const vendorScripts = [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
    "node_modules/flatpickr/dist/flatpickr.js",
    "node_modules/jquery/dist/jquery.js",
    "node_modules/jquery-validation/dist/jquery.validate.js",
    "node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js",
];

//  Paths to minified vendor scripts.
const vendorMinScripts = [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    "node_modules/flatpickr/dist/flatpickr.min.js",
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/jquery-validation/dist/jquery.validate.min.js",
    "node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.min.js",
];

//  Builds the non-miified vendor scripts by combining all paths found in
//  vendorScripts above and concatinating them into a single file
gulp.task("build-vendor-js", function () {
    return gulp
        .src(vendorScripts)
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest("wwwroot/dist/vendor/js"));
});

//  Builds the minified vendor scripts by combining all paths found in
//  vendorMinScripts above and concatinating them into a single file
gulp.task("build-vendor-min-js", function () {
    return gulp
        .src(vendorMinScripts)
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest("wwwroot/dist/vendor/js"));
});

//  Executes the build tasks in paralell to build all vendor styles.
gulp.task(
    "build-vendor-scripts",
    parallel("build-vendor-js", "build-vendor-min-js")
);

//  Cleans the vendor scripts directory by deleting it
gulp.task("clean-vendor-scripts", function () {
    return del("wwwroot/dist/vendor/js");
});

//  Performs a rebuild of the vendor scripts by first performign a clean task
//  followed by a build task.
gulp.task(
    "rebuild-vendor-scripts",
    series("clean-vendor-scripts", "build-vendor-scripts")
);
