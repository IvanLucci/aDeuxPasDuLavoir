//Include the packages
var gulp 	= require( 'gulp' ),
	gutil	= require( 'gulp-util' ),
	cssmin 	= require( 'gulp-cssmin' ),
	uglify	= require( 'gulp-uglify' ),
	sass	= require( 'gulp-ruby-sass' ),
	concat 	= require( 'gulp-concat' ),
	flatten	= require( 'gulp-flatten' );

//List of dependency libraries
var depLibs = [
	'bower_components/angular/angular.min.js',
	'bower_components/angular-animate/angular-animate.min.js',
	'bower_components/angular-route/angular-route.min.js',
	'bower_components/angular-translate/angular-translate.min.js',
	'bower_components/angular-cookies/angular-cookies.min.js',
	'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
	'bower_components/angular-translate-storage-local/angular-translate-storage-local.min.js',
	'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js'
];

//Default task
gulp.task( 'default', [ 'sass', 'js', 'deps', 'views', 'html', 'tpl', 'content', 'locale' ]);

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

gulp.task( 'deps', function() {
	return gulp.src( depLibs )
		.pipe( flatten() )
		.pipe( concat( 'dependencies.js' ) )
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

//Copy templates
gulp.task( 'tpl', function() {
	return gulp.src( 'src/app/**/*.tpl.html' )
		.pipe( flatten() )
		.pipe( gulp.dest( 'public/app/tpl' ) );
});

//Copy the content JSON files
gulp.task( 'content', function() {
	return gulp.src( 'src/app/**/*.json' )
		.pipe( gulp.dest( 'public/app/content' ) );
});

//Copy locale folder
gulp.task( 'locale', function() {
	return gulp.src( 'src/app/locale/*.json' )
		.pipe( gulp.dest( 'public/app/content/locale' ) );
});