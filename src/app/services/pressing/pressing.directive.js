(function( app, tplPath ) {

	app.directive( 'pressing', [ 'pressingService', function( pressingService ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'pressing.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.info = {};
			scope.currentPage = 1;
			scope.itemsPerPage = 6;

			pressingService.getInfo().then(
				function( data ) {
					scope.info = data;
				}
			);
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );