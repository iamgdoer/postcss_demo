const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const pump         = require('pump');

const alias        = require('postcss-alias');
const magician     = require('postcss-font-magician');

gulp.task('css', function(cb) {
    const plugins = [
        alias,
        magician
    ];
    pump([
        gulp.src('src/*.css'),
        postcss(plugins),
        gulp.dest('dest')
    ], cb)
});