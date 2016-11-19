(function( app ) {

	app.config([ '$httpProvider', function( $httpProvider ) {

		$httpProvider.defaults.headers.get = $httpProvider.defaults.headers.get || {}; 
	    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
	    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

	}]);

})( window.adpdl.module );