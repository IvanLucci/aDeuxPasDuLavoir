(function( app, paths ) {

	app.factory( 'pressingService', [ '$http', function( $http ) {
		
		function fixUrl( info ) {
			info.img = paths.servImgPath + info.img;
		}

		return {

			getInfo: function() {
				return $http.get( paths.contentPath + 'services/pressing/pressing.json' ).then(
					function( res ) {
						fixUrl( res.data );
						console.log( res.data );
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the pressing info';
					}
				);
			}

		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths );