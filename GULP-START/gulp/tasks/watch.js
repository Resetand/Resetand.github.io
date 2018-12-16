module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/*.html', $.gulp.series('html'));
        $.gulp.watch('./dev/static/styles/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./dev/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('js'));
        $.gulp.watch('./dev/static/fonts/**/*.{ttf,woff,woff2,eot,svg}', $.gulp.series('fonts'));
        $.gulp.watch(['./dev/static/img/general/**/*.{png,jpg,gif}',
                     './dev/static/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));         
    });
};