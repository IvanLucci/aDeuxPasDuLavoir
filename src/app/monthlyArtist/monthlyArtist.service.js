(function( app, contentPath ) {

	app.factory( 'monthlyArtistService', [ '$http', function( $http ) {
		
		function fixUrl( info ) {
			if ( !info ) {
				return false;
			}
			info.img = info.img && contentPath + 'monthlyArtist/img/' + info.img;
			return info;
		}

		function getCurrentMonth() {
			return (new Date().getMonth() + 1).toString();
		}

		function getLastArtist( artistsObj ) {
			var keys = Object.keys( artistsObj );
			return artistsObj[ keys[ keys.length - 1 ] ];
		}

		return {

			getCurrentArtist: function() {
				return $http.get( contentPath + 'monthlyArtist/monthlyArtist.json' ).then(
					function( res ) {
						var data = res.data,
						current = data[ getCurrentMonth() ],
						current = current || getLastArtist( data );
						return fixUrl( current );
					},
					function( error ) {
						throw 'Cannot get the monthly artist';
					}
				);
			}

		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths.contentPath );