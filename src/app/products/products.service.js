(function( app, paths ) {

	app.factory( 'productsService', [ '$http', function( $http ) {
		
		function fixUrls( products ) {
			for ( var i = products.length - 1; i >= 0; i-- ) {
				if ( products[i].img ) {
					products[i].img = paths.prodImgPath + products[i].img;
				}
			}
		}

		return {

			getProducts: function() {
				return $http.get( paths.contentPath + 'products/products.json' ).then(
					function( res ) {
						fixUrls( res.data );
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the products';
					}
				);
			}

		};
	}]);

})( window.adpdl.module,
	window.adpdl.paths );