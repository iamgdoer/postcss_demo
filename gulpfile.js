const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const pump         = require('pump');

const alias        = require('postcss-alias');
const magician     = require('postcss-font-magician');
const circle       = require('postcss-circle');
const triangle     = require('postcss-triangle');
const precss       = require('precss');
const cssnext      = require('postcss-cssnext');
const px2rem       = require('postcss-px2rem');

gulp.task('css', function(cb) {
    const plugins = [
        alias,
        precss(),
        cssnext,
        magician,
        circle,
        triangle,
        px2rem({remUtil: 75})
    ];
    pump([
        gulp.src('src/*.css'),
        postcss(plugins),
        gulp.dest('dest')
    ], cb)
});
