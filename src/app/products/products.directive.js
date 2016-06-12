(function( app, tplPath ) {

	app.directive( 'products', [ 'productsService', function( productsService ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'products.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.products = [];

			productsService.getProducts().then(
				function( data ) {
					scope.products = data;
				}
			);

			scope.getAltId = function( productId ) {
				return 'products.' + productId + '.imgAlt';
			}
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );