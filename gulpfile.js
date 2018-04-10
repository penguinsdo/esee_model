var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var del = require('del');

var spritesmith = require('gulp.spritesmith');

/*gulp.task('sprite', function() {
	// Generate our spritesheet
	var spriteData = gulp.src('css/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css'
	}));

	del(['css/sprite/sprite.png']);
	// Pipe image stream through image optimizer and onto disk
	var imgStream = spriteData.img
		// DEV: We must buffer our stream into a Buffer for `imagemin`
		.pipe(buffer())
		.pipe(imagemin())
		.pipe(gulp.dest('css/sprite/'));

	// Pipe CSS stream through CSS optimizer and onto disk
	var cssStream = spriteData.css
		//.pipe(csso())
		.pipe(gulp.dest('css/sprite/'));

	// Return a merged stream to handle both `end` events
	return merge(imgStream, cssStream);
});*/

// Compile the less files into css.
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 5 versions'] });

gulp.task('less2css', function () {
	//del(['css/']);
	gulp.src('less/*.less')
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(gulp.dest('css/'));
});

// Listen the files change event, and do some task automatically.
var watch = require('gulp-watch')
gulp.task('watch', function(){
	gulp.watch('less/*.less', ['less2css']);
});

gulp.task('default', ['watch']);

// tasks for bundling usage
gulp.task('less2css-min', function () {
	//del(['css/']);
	gulp.src('less/*.less')
		.pipe(less({
			plugins: [autoprefix]
		}))
		.pipe(csso())
		.pipe(gulp.dest('dist/'));
});

var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglify');
gulp.task('script-min', function () {
	gulp.src(['js/venders/zepto.min.js','js/details.js'])
		.pipe(concat('details.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('dist/'));
});

gulp.task('build', ['less2css-min', 'script-min']);
