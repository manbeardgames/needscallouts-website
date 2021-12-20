const del = require("del");
const { parallel, series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");

//  Paths to non-mininified vendor stylesheets.
const vendorStyles = [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/flatpickr/dist/flatpickr.css",
    "node_modules/font-awesome/css/font-awesome.css",
];

//  Paths to minified vendor stylesheets.
const vendorMinStyles = [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/flatpickr/dist/flatpickr.min.css",
    "node_modules/font-awesome/css/font-awesome.min.css",
];

//  Additional resources required by vendor styles
const vendorFonts = [
    "node_modules/font-awesome/fonts/fontawesome-webfont.eot",
    "node_modules/font-awesome/fonts/fontawesome-webfont.svg",
    "node_modules/font-awesome/fonts/fontawesome-webfont.ttf",
    "node_modules/font-awesome/fonts/fontawesome-webfont.woff",
    "node_modules/font-awesome/fonts/fontawesome-webfont.woff2",
];

//  Builds the non-miified vendor stylesheets by combining all paths found in
//  vendorStyle above and concatinating them into a single file
gulp.task("build-vendor-css", function () {
    return gulp
        .src(vendorStyles)
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("wwwroot/dist/vendor/css"));
});

//  Builds the minified vendor stylesheets by combining all paths found in
//  vendorMinStyles above and concatinating them into a single file
gulp.task("build-vendor-min-css", function () {
    return gulp
        .src(vendorMinStyles)
        .pipe(concat("vendor.min.css"))
        .pipe(gulp.dest("wwwroot/dist/vendor/css"));
});

//  Copies the required vendor fonts to the dist directory in the project.
gulp.task("build-vendor-fonts", function () {
    return gulp.src(vendorFonts).pipe(gulp.dest("wwwroot/dist/vendor/fonts"));
});

//  Executes the build tasks in paralell to build all vendor styles.
gulp.task(
    "build-vendor-styles",
    parallel("build-vendor-css", "build-vendor-min-css", "build-vendor-fonts")
);

//  Cleans the vendor styles directory by deleting it
gulp.task("clean-vendor-styles", function () {

    return del(["wwwroot/dist/vendor/css", "wwwroot/dist/vendor/fonts"]);
});

//  Performs a rebuild of the vendor styles by first performign a clean task
//  followed by a build task.
gulp.task(
    "rebuild-vendor-styles",
    series("clean-vendor-styles", "build-vendor-styles")
);
