(function( app, tplPath ) {

	app.directive( 'products', [ function() {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'products.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );