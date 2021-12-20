const del = require("del");
const { task, series } = require("gulp");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("build-images", function () {
    gulp.src("wwwroot/images/**/*")
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
            ])
        )
        .pipe(gulp.dest("wwwroot/dist/images"));
});

gulp.task("clean-images", function () {
    return del("wwwroot/dist/images");
});

gulp.task("rebuild-images", series("clean-images", "build-images"));
