(function( app, paths ) {

	app.factory( 'servicesService', [ '$http', function( $http ) {
		
		function fixUrls( services ) {
			for ( var i = services.length - 1; i >= 0; i-- ) {
				if ( services[i].img ) {
					services[i].img = paths.servImgPath + services[i].img;
				}
			}
		}

		return {
			getServices: function() {
				return $http.get( paths.contentPath + 'services/services.json' ).then(
					function( res ) {
						fixUrls( res.data );
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the services';
					}
				);
			}
		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths );