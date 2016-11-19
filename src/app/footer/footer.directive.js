(function( app, tplPath ) {

	app.directive( 'footer', [ function() {

		return {
			restrict: 'A',
			replace: true,
			templateUrl: tplPath + 'footer.tpl.html',
			scope: {}
		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );