(function( app, paths ) {

	app.factory( 'pressPointService', [ '$http', function( $http ) {
		
		function fixUrl( info ) {
			info.img = paths.servImgPath + info.img;
		}

		return {

			getInfo: function() {
				return $http.get( paths.contentPath + 'services/pressPoint/pressPoint.json' ).then(
					function( res ) {
						fixUrl( res.data );
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the press point info';
					}
				);
			}

		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths );