(function( app, localePath ) {

	app.config([ '$translateProvider', function( $translateProvider ) {

		$translateProvider
			.useStaticFilesLoader({
				prefix: localePath + 'language-',
				suffix: '.json'
			})
			.preferredLanguage( 'en' )
			.fallbackLanguage([ 'fr', 'en' ])
			.useLocalStorage();

	}]);

})( window.adpdl.module,
	window.adpdl.paths.localePath );