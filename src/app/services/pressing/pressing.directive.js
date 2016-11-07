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

			pressingService.getInfo().then(
				function( data ) {
					console.log( data );
					scope.info = data;
				}
			);
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );