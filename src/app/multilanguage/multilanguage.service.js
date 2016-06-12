(function( app, contentPath ) {

	app.factory( 'multilanguageService', [ '$http', function( $http ) {
		
		return {

			getActiveLanguages: function() {
				return $http.get( contentPath + 'multilanguage/activeLanguages.json' ).then(
					function( res ) {
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the active languages';
					}
				); 
			}
			
		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths.contentPath );