(function( app, tplPath ) {

	app.directive( 'timetable', [ 'timetableService', '$q', function( timetableService, $q ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'timetable.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {

			scope.timetable = {};
			scope.days = [];

			$q.all([
				timetableService.getTimetable(),
				timetableService.getDays()
			]).then(
				function( data ) {
					scope.timetable = data[0];
					scope.days = data[1];
					console.log( scope.days );
					console.log( scope.timetable );
				}
			);
		}

	}]);	

})( window.adpdl.module, 
	window.adpdl.paths.tplPath );