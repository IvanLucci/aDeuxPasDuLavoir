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
			var active = null;

			menuService.getMenuItems().then(
				function( data ) {
					scope.menuItems = data;
					active = getPageNameFromUrl( $location.path() );
				}
			);

			function getPageNameFromUrl( url ) {
				return url.substr( url.lastIndexOf('/') + 1 );
			}

			scope.isActive = function( url ) {
				return active === url;
			}

			scope.$on('$locationChangeSuccess', function( event, next ) {
			    active = getPageNameFromUrl( next );
			});
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );