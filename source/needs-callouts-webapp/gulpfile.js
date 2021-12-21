const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const gulpif = require("gulp-if");
const { series, parallel, src, dest } = require("gulp");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");

function bundleVendorCSS() {
    return src([
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/flatpickr/dist/flatpickr.css",
        "node_modules/font-awesome/css/font-awesome.css",
    ])
        .pipe(concat("vendor.css"))
        .pipe(dest("wwwroot/dist/css"));
}

function bundleVendorCSSMin() {
    return src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "node_modules/flatpickr/dist/flatpickr.min.css",
        "node_modules/font-awesome/css/font-awesome.min.css",
    ])
        .pipe(concat("vendor.min.css"))
        .pipe(dest("wwwroot/dist/css"));
}

function bundleVendorJS() {
    return src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/jquery-validation/dist/jquery.validate.js",
        "node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
        "node_modules/flatpickr/dist/flatpickr.js",
    ])
        .pipe(concat("vendor.js"))
        .pipe(dest("wwwroot/dist/js"));
}

function bundleVendorJSMin() {
    return src([
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/jquery-validation/dist/jquery.validate.min.js",
        "node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
        "node_modules/flatpickr/dist/flatpickr.min.js",
    ])
        .pipe(concat("vendor.min.js"))
        .pipe(dest("wwwroot/dist/js"));
}

function minifyImages() {
    return src("wwwroot/dev/images/**/*")
        .pipe(newer("wwwroot/dist/images"))
        .pipe(
            imagemin(
                [
                    imagemin.gifsicle({ interlaced: true }),
                    imagemin.mozjpeg({ quality: 75, progressive: true }),
                    imagemin.optipng({ optimizationLevel: 5 }),
                ],
                {
                    verbose: true,
                }
            )
        )
        .pipe(dest("wwwroot/dist/images"));
}

function siteCSS() {
    return src("wwwroot/dev/sass/**/*.scss")
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(
            rename(function (path) {
                path.extname = ".css";
            })
        )
        .pipe(dest("wwwroot/dist/css"));
}

function siteCSSMin() {
    return src("wwwroot/dev/sass/**/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(
            rename(function (path) {
                path.extname = ".min.css";
            })
        )
        .pipe(dest("wwwroot/dist/css"));
}

function copyFontAwesomeFonts() {
    return src("node_modules/font-awesome/fonts/**/*")
        .pipe(newer("wwwroot/dist/fonts"))
        .pipe(dest("wwwroot/dist/fonts"));
}

exports.debug = parallel(
    bundleVendorCSS,
    copyFontAwesomeFonts,
    bundleVendorJS,
    siteCSS,
    minifyImages
);
exports.release = parallel(
    bundleVendorCSSMin,
    copyFontAwesomeFonts,
    bundleVendorJSMin,
    siteCSSMin,
    minifyImages
);

exports.test = siteCSS;
