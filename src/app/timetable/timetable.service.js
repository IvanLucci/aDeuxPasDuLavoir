(function( app, contentPath ) {

	app.factory( 'timetableService', [ '$http', '$q', function( $http, $q ) {

		return {

			// Get the timetable. It will return the summer or winter ones according to
			// the summer period defined in timetableSummerSeason.json
			getTimetable: function() {
				var promises = [
					$http.get( contentPath + 'timetable/timetable.json' ),
					$http.get( contentPath + 'timetable/timetableSummerSeason.json' )
				];

				return $q.all( promises ).then(
					function( res ) {
						var timetable 		= res[0].data,
							summerSeason 	= res[1].data;
						return isSummer( summerSeason ) ? timetable.summer : timetable.winter; 
					},
					function( error ) {
						throw 'Cannot get the timetable.';
					}
				);
			},

			// Get the days of the week.
			// TODO: consider multilanguage
			getDays: function() {
				return $http.get( contentPath + 'timetable/days.json' ).then(
					function( res ) {
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the days.';
					}
				);
			}

		};

		// Check if we are in the summer season or not.
		function isSummer( summerSeason ) {
			var currMonth = new Date().getMonth() + 1;
			return ( currMonth >= summerSeason.fromMonth && currMonth <= summerSeason.toMonth ) ? true : false;
		}

	}]);	

})( window.adpdl.module,
	window.adpdl.paths.contentPath );