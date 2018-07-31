const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const pump         = require('pump');

const alias        = require('postcss-alias');

gulp.task('css', function(cb) {
    const plugins = [
        alias
    ];
    pump([
        gulp.src('src/*.css'),
        postcss(plugins),
        gulp.dest('dest')
    ], cb)
});