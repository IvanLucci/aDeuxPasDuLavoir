(function( app, paths ) {

	app.factory( 'productsService', [ '$http', function( $http ) {
		
		function fixUrls( categories ) {
			var products = null, i, j;
			for ( i = categories.length - 1; i >= 0; i-- ) {
				fixUrl( categories[i] );
				products = categories[i].products || [];
				for ( j = products.length - 1; j >= 0; j-- ) {
					fixUrl( products[j] );
				}
			}
		}

		function fixUrl( item ) {
			item.img = item.img && paths.prodImgPath + item.img;
		}

		return {

			getCategories: function() {
				return $http.get( paths.contentPath + 'products/products.json' ).then(
					function( res ) {
						fixUrls( res.data );
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the categories';
					}
				);
			}

		};
	}]);

})( window.adpdl.module,
	window.adpdl.paths );