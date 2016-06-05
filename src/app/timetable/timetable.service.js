(function( app, contentPath ) {

	app.factory( 'timetableService', [ '$http', '$q', function( $http, $q ) {

		var days = [
			'sunday',
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday'
		];

		// Check if we are in the summer season or not.
		function isSummer( summerSeason ) {
			var currMonth = new Date().getMonth() + 1;
			return ( currMonth >= summerSeason.fromMonth && currMonth <= summerSeason.toMonth ) ? true : false;
		}

		// Remove spaces from a string
		function removeSpaces( str ) {
			return str.replace(/\s+/g, '');
		}

		// Extract the hour out of a colon-separated time representation
		function getHour( time ) {
			return parseInt( removeSpaces( time ).split( ':' )[0] );
		}

		// Extract the minutes out of a colon-separated time representation
		function getMinutes( time ) {
			return parseInt( removeSpaces( time ).split( ':' )[1] );
		}

		// Check if number x is between a and b, including extremes
		function inRange( x, a, b ) {
			return x >= a && x <= b;
		}

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
			getDays: function() {
				var shiftedDays = angular.copy( days );
				shiftedDays.push( shiftedDays.shift() );
				return shiftedDays;
			},

			// Check if day is the current week day.
			isCurrentWeekDay: function( day ) {
				var currDay = new Date().getDay();
				return days[ currDay ] === day;
			},

			// Get the day string from the day index that we get from getDate().getDay()
			getDayString: function( dayIndex ) {
				return days[ dayIndex ];
			},

			isCurrTimeInRange: function( time ) {
				var currHour			= new Date().getHours(),
					currMins			= new Date().getMinutes(),
					morningHourFrom		= getHour( time.morning.from ),
					morningHourTo 		= getHour( time.morning.to ),
					morningMinsFrom		= getMinutes( time.morning.from ),
					morningMinsTo		= getMinutes( time.morning.to ),
					afternoonHourFrom	= getHour( time.afternoon.from ),
					afternoonHourTo		= getHour( time.afternoon.to ),
					afternoonMinsFrom	= getMinutes( time.afternoon.from ),
					afternoonMinsTo		= getMinutes( time.afternoon.to );

				if ( ( inRange( currHour, morningHourFrom, morningHourTo ) &&
					   ( currHour !== morningHourFrom || currMins >= morningMinsFrom ) &&
					   ( currHour !== morningHourTo || currMins <= morningMinsTo ) ) ||
					 ( inRange( currHour, afternoonHourFrom, afternoonHourTo ) &&
					   ( currHour !== afternoonHourFrom || currMins >= afternoonMinsFrom ) &&
					   ( currHour !== afternoonHourTo || currMins <= afternoonMinsTo ) ) ) {
					return true;
				}
				return false;
			}

		};

	}]);	

})( window.adpdl.module,
	window.adpdl.paths.contentPath );