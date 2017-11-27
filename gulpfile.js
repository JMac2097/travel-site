var gulp = require('gulp'),
watch = require('gulp-watch'),
postCss = require('gulp-postcss'),
autoPrefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('default', function(){
    console.log('Hooray, you created a gulp task!!');
});

gulp.task('html', function() {
    console.log('Imagine this doing something very useful indeed');
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postCss([cssImport, cssVars, nested, autoPrefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});




gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});