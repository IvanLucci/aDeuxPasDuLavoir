(function( app, tplPath ) {

	app.directive( 'menu', [ 'menuService', '$location', function( menuService, $location ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'menu.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.menuItems = [];

			menuService.getMenuItems().then(
				function( data ) {
					scope.menuItems = data;
				}
			);
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );