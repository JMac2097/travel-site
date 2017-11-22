var gulp = require('gulp'),
watch = require('gulp-watch'),
postCss = require('gulp-postcss'),
autoPrefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


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

    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });

});