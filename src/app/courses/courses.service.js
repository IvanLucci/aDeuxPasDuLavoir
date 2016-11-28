(function( app, contentPath ) {

	app.factory( 'coursesService', [ '$http', function( $http ) {
		
		function fixUrl( info ) {
			info.img = info.img && contentPath + 'courses/img/' + info.img;
		}

		function fixUrls( courses ) {
			courses = courses || [];
			for ( var i = courses.length - 1; i >= 0; i-- ) {
				fixUrl( courses[i] );
			}
		}


		return {

			getInfo: function() {
				return $http.get( contentPath + 'courses/courses.json' ).then(
					function( res ) {
						var info = res.data;
						fixUrls( info.courses );
						return info;
					},
					function( error ) {
						throw 'Cannot get the courses';
					}
				);
			}

		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths.contentPath );