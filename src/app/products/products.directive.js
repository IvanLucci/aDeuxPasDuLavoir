(function( app, tplPath ) {

	app.directive( 'products', [ 'productsService', function( productsService ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'products.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.categories = [];

			productsService.getCategories().then(
				function( data ) {
					scope.categories = data;
				}
			);

			scope.getAltId = function( productId ) {
				return 'products.' + productId + '.imgAlt';
			};

			scope.getStyle = function( category ) {
				var style = {
					'background-image': 'url(' + category.img + ')',
					'background-repeat': 'no-repeat',
					'background-position': '100%',
					'background-size': 'auto 100px'
				};
				console.log( style );
				return style;
			};
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );