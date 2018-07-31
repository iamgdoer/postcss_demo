const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const pump         = require('pump');

gulp.task('css', function(cb) {
    const plugins = [
    ];
    pump([
        gulp.src('src/*.css'),
        postcss(plugins),
        gulp.dest('dest')
    ], cb)
});