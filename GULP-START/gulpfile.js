// 16.12.2018

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),

    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
};

/* =======переписываем js=======переписываем js=======переписываем js====переписываем js========переписываем js=========переписываем js============переписываем js==== */

var mainBowerFiles = require('main-bower-files');
var gulp = require('gulp')
var filter = require('gulp-filter')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('jsForLibs', ()=>  {

    const jsFilter = filter('**/*.js', {restore: true});

    return  gulp.src(mainBowerFiles())
        .pipe(jsFilter)
		.pipe(concat('libs.js'))
		.pipe(uglify())
        .pipe(gulp.dest('build/static/js'))
        .pipe($.browserSync.reload({
            stream: true
        }));
});

gulp.task('js', ()=>  {

    return  gulp.src('dev/static/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
        .pipe(gulp.dest('build/static/js'))
        .pipe($.browserSync.reload({
            stream: true
        }));
});

/* ============================================================================================================================================================================================== */

/* =======переписываем css=======переписываем css=======переписываем css====переписываем css========переписываем css=========переписываем js============переписываем js==== */
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

gulp.task('stylesForLibs', ()=>  {

    const cssFilter = filter('**/*.css', {restore: true});

    return  gulp.src(mainBowerFiles())
        .pipe(cssFilter)
		.pipe(concat('libs.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/static/css'))
        .pipe($.browserSync.reload({
            stream: true
        }));
});

gulp.task('sass', ()=>  {
    return  gulp.src('dev/static/styles/main.scss')
            .pipe(sass())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe(gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
        }));
});

/* ============================================================================================================================================================================================== */


$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel( 'stylesForLibs', 'sass', 'html', 'jsForLibs', 'js', 'svg', 'img:dev', 'fonts','svg:copy')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('sass', 'html', 'js', 'svg', 'img:build', 'fonts','svg:copy')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve',
    ),
));