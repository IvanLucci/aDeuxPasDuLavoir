(function( app, contentPath ) {

	app.factory( 'menuService', [ '$http', function( $http ) {

		return {
			
			getMenuItems: function() {
				return $http.get( contentPath + 'menu/menu.json' ).then(
					function( res ) {
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the menu items';
					}
				);
			}

		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths.contentPath );