(function( app, tplPath ) {

	app.directive( 'timetable', [ 'timetableService', function( timetableService ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'timetable.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			
		}

	}]);	

})( window.adpdl.module, 
	window.adpdl.paths.tplPath );