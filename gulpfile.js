var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();
var bowerFiles = require('main-bower-files');

gulp.task('inject', function() {
   var target = gulp.src('src/index.html');
   // It's not necessary to read the files (will speed up things), we're only after their paths:
   var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {
      read: false
   });

   return target.pipe(inject(sources))
      .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
      .pipe(gulp.dest('./src'));
});

gulp.task('serve', function() {

   browserSync.init({
      server: {
         baseDir: "./src",
         routes: {
            "/bower_components": "bower_components",
            "/src": "src"
         }
      }
   });


   gulp.watch("src/**/*.html").on('change', browserSync.reload);
   gulp.watch("src/**/*.js").on('change', browserSync.reload);
   gulp.watch("src/**/*.css").on('change', browserSync.reload);
});
