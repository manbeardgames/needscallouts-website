const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/*
 * Libs
 * Each property in the libs object pertains to one cline-side library that
 * needs to have files and/or directories from node_modules copied into
 * wwwroot. 
 * 
 * Each property is an array of objects, and each of these objects contains
 * a 'src' and 'dest' property.  The 'src' property is the source path glob
 * that will be used for the gulp task.  The 'dest' property is the path that
 * will be used for the gulp.dest pipe.
 */
const libs = {
    "bootstrap": [{
            "src": "node_modules/bootstrap/dist/**/*",
            "dest": "wwwroot/lib/bootstrap/dist"
        },
        {
            "src": "node_modules/bootstrap/LICENSE",
            "dest": "wwwroot/lib/bootstrap"
        }
    ],
    "jquery": [{
            "src": "node_modules/jquery/dist/**/*",
            "dest": "wwwroot/lib/jquery/dist"
        },
        {
            "src": "node_modules/jquery/LICENSE.txt",
            "dest": "wwwroot/lib/jquery"
        }
    ],
    "jqueryValidation": [{
            "src": "node_modules/jquery-validation/dist/**/*",
            "dest": "wwwroot/lib/jquery-validation/dist"
        },
        {
            "src": "node_modules/jquery-validation/LICENSE.md",
            "dest": "wwwroot/lib/jquery-validation"
        }
    ],
    "jqueryValidationUnobtrusive": [{
            "src": "node_modules/jquery-validation-unobtrusive/dist/**/*",
            "dest": "wwwroot/lib/jquery-validation-unobtrusive/dist"
        },
        {

            "src": "node_modules/jquery-validation-unobtrusive/LICENSE.txt",
            "dest": "wwwroot/lib/jquery-validation-unobtrusive"
        }
    ],
    "popperjs": [{
        "src": "node_modules/popper.js/dist/**/*",
        "dest": "wwwroot/lib/popper.js/dist"
    }],
    "fontawesome": [{
            "src": "node_modules/font-awesome/css/**/*",
            "dest": "wwwroot/lib/font-awesome/css"
        },
        {
            "src": "node_modules/font-awesome/fonts/**/*",
            "dest": "wwwroot/lib/font-awesome/fonts"
        }
    ],
    "flatpickr": [{
        "src": "node_modules/flatpickr/dist/**/*",
        "dest": "wwwroot/lib/flatpickr/dist"
    }]
};


//  Holds the name of each clean task that is dynamically built
let cleanTasks = [];

//  Holds the name of each build task that is dynamically built
let buildTasks = [];

//  Loop through each property in the libs object and create
//  the clean and build gulp tasks for each.
/*
 * Loop through each of the properties in the libs object. The
 * lib variable that is created contains the name of the
 * property (e.g. 'bootstrap', 'jquery', 'popper.js').
 * 
 * For each property that is looped, we loop through the
 * {src, dest} objects contained in each and create a new
 * clean and build task.  The names of the clean and build
 * tasks are generated automatically using the format
 * 
 * 'clean:<lib>:<iterator>' 
 * where <lib> is the name of the of the lib property and
 * <iterator> is the value of i
 * 
 * each build and clean task that is created has its name
 * added to their related storage array
 */
for (var lib in libs) {
    let i = 0;
    libs[lib].forEach(function (sources) {
        let name = lib + "[" + i + "]";
        let cleanName = "clean:" + name;
        let buildName = "build:" + name;
        gulp.task(cleanName, function () {
            return del(sources.dest);
        });
        gulp.task(buildName, function () {
            return gulp.src(sources.src)
                .pipe(gulp.dest(sources.dest));
        });
        cleanTasks.push(cleanName);
        buildTasks.push(buildName);
        i++;
    });
}

/*
 * Create a master clean task that runs each of the dynamically
 * built clean tasks in parallel
 */
gulp.task('clean', gulp.parallel(cleanTasks));

/*
 * Create a master build task that runs each of the dynamically
 * built build tasks in paralle
 */
gulp.task('build', gulp.parallel(buildTasks));

/*
 * Create a default tasks that executes the clean and then build
 * tasks in serial
 */
gulp.task('default', gulp.series('clean', 'build'));

/*
 *
 * Compiles SCSS files
 */
gulp.task('sass', function(cb) {
    gulp
        .src('wwwroot/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(
            gulp.dest(function(f) {
                console.log(f.base);
                return f.base;
            })
        );
        cb();
});