(function( app, paths ) {

	app.factory( 'massageService', [ '$http', function( $http ) {
		
		function fixUrl( info ) {
			info.img = paths.servImgPath + info.img;
		}

		return {

			getInfo: function() {
				return $http.get( paths.contentPath + 'services/massage/massage.json' ).then(
					function( res ) {
						fixUrl( res.data );
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the massage info';
					}
				);
			}

		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths );