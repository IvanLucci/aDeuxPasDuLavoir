//Include the packages
var gulp 	= require( 'gulp' ),
	gutil	= require( 'gulp-util' ),
	cssmin 	= require( 'gulp-cssmin' ),
	uglify	= require( 'gulp-uglify' ),
	sass	= require( 'gulp-ruby-sass' );
	concat 	= require( 'gulp-concat' );

//Default task
gulp.task( 'default', [ 'sass', 'js', 'views', 'html' ]);

//Compile css and minify if production
gulp.task( 'sass', function() {
	return sass( 'src/sass/main.scss' )
		.pipe( gutil.env.type === 'production' ? cssmin() : gutil.noop() )
		.pipe( gulp.dest( 'public/css' ) );
});

//Concat js and uglify if production
gulp.task( 'js', function() {
	return gulp.src([ 'src/app/adpdl.js', 'src/app/**/*.js' ])
		.pipe( concat( 'app.js' ) )
		.pipe( gutil.env.type === 'production' ? uglify() : gutil.noop() )
		.pipe( gulp.dest( 'public/app' ) );
});

//Copy html
gulp.task( 'html', function() {
	return gulp.src( 'src/index.html' )
		.pipe( gulp.dest( 'public' ) );
});

//Copy views
gulp.task( 'views', function() {
	return gulp.src( 'src/views/**/*' )
		.pipe( gulp.dest( 'public/views' ) );
});