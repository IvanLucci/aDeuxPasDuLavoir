(function( app, tplPath ) {

	app.directive( 'timetable', [ 'timetableService', '$translate', function( timetableService, $translate ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'timetable.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {

			scope.days = [];
			scope.isOpen = null;
			var timetable = {};


			timetableService.getTimetable().then(
				function( data ) {
					timetable = data;
					scope.days = timetableService.getDays();
					scope.isOpen = isNowOpen();
				}
			);

			function isNowOpen() {
				var today = new Date(),
				currDayStr = timetableService.getDayString( today.getDay() );
				return timetableService.isCurrTimeInRange( timetable[ currDayStr ] );
			}

			scope.getMorningTime = function( day ) {
				var morning = timetable[ day ].morning || '';
				return morning.from && morning.to ? morning.from + ' - ' + morning.to : '';
			}

			scope.getAfternoonTime = function( day ) {
				var afternoon = timetable[ day ].afternoon || '';
				return afternoon.from && afternoon.to ? afternoon.from + ' - ' + afternoon.to : '';
			}

			scope.isCurrentWeekDay = function( day ) {
				return timetableService.isCurrentWeekDay( day );
			}
		}

	}]);	

})( window.adpdl.module, 
	window.adpdl.paths.tplPath );