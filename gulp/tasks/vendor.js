var gulp = require("gulp");
gulp.task('vendor', function() {
  var concat = require('gulp-concat'),
	  uglify = require('gulp-uglify');
  gulp.src([
      'node_modules/react/dist/react-with-addons.js',
      'node_modules/lodash/dist/lodash.js',
      'node_modules/moment/moment.js',
      'node_modules/moment/locale/nb.js'
    ])
	.pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public'))
});
