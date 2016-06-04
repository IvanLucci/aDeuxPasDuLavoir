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
			var timetable = {};

			timetableService.getTimetable().then(
				function( data ) {
					timetable = data;
					scope.days = timetableService.getDays();
				}
			);

			scope.getMorningTime = function( day ) {
				var morning = timetable[ day ].morning;
				return morning.from + ' - ' + morning.to;
			}

			scope.getAfternoonTime = function( day ) {
				var afternoon = timetable[ day ].afternoon;
				return afternoon.from + ' - ' + afternoon.to;
			}

			scope.changeLang = function( lang ) {
				$translate.use( lang );
			}
		}

	}]);	

})( window.adpdl.module, 
	window.adpdl.paths.tplPath );