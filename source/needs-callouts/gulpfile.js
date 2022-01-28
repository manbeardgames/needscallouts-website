// const { src, dest, series, parallel, watch } = require("gulp");
const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");

//  Copies the font-awesome css files over
const fontAwesome = () => {
  return gulp.src("./node_modules/@fortawesome/fontawesome-free/css/all.css")
    .pipe(rename("font-awesome.css"))
  .pipe(gulp.dest("./app/public/css/"));
}

//  Copies the font-awesome font files over
const fontAwesomeFonts = () => {
  return gulp.src("./node_modules/@fortawesome/fontawesome-free/webfonts/**/*")
    .pipe(gulp.dest("./app/public/webfonts"));
}

//  Compiles the project scss
const compileScss = () => {
  return gulp.src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(rename((path) => { path.extname = ".css"; }))
    .pipe(gulp.dest("./app/public/css"));
}


exports.build = gulp.parallel(fontAwesome, fontAwesomeFonts, compileScss);
exports.dev = gulp.series(fontAwesome, fontAwesomeFonts, compileScss, () => { gulp.watch("./scss/**/*.scss", compileScss) });

