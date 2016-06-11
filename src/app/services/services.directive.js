(function( app, tplPath ) {

	app.directive( 'services', [ 'servicesService', function( servicesService ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'services.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.services = [];

			servicesService.getServices().then(
				function( data ) {
					scope.services = data;
				}
			);
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );