var gulp = require('gulp'),
   inject = require('gulp-inject'),
   browserSync = require('browser-sync').create(),
   bowerFiles = require('main-bower-files'),
   angularFilesort = require('gulp-angular-filesort')
   spa = require("browser-sync-spa");

gulp.task('inject', function() {
   return gulp.src('./src/index.html')
      .pipe(inject(
         gulp.src(['./src/**/*.js', './src/**/*.css']).pipe(angularFilesort())
      ))
      .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
      .pipe(gulp.dest('./src'));
});

gulp.task('serve', ['inject'], function() {
   browserSync.use(spa({
      selector: "[ng-app]",
      history: {
         index: '/index.html'
      }
   }));

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
