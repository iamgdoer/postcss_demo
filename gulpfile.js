const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const pump         = require('pump');

const alias        = require('postcss-alias');
const magician     = require('postcss-font-magician');
const circle       = require('postcss-circle');
const triangle     = require('postcss-triangle');
const precss       = require('precss');

gulp.task('css', function(cb) {
    const plugins = [
        alias,
        precss(),
        magician,
        circle,
        triangle
    ];
    pump([
        gulp.src('src/*.css'),
        postcss(plugins),
        gulp.dest('dest')
    ], cb)
});
