module.exports = function() {
    $.gulp.task('html', ()=>  {
        return $.gulp.src('./dev/*.html')
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
