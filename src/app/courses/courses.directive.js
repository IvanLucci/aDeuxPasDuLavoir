(function( module, tplPath ) {

	module.directive( 'courses', [ 'coursesService', '$filter', function( coursesService, $filter ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'courses.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.info = {};

			coursesService.getInfo().then(function( data ) {
				scope.info = data;
			});

			scope.getHeading = function( courseId ) {
				return $filter('translate')( 'courses.' + courseId + '.name' );
			};
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );