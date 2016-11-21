(function( app, tplPath ) {

	app.directive( 'products', [ 'productsService', '$sce', '$filter', function( productsService, $sce, $filter ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'products.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.categories = [];
			scope.popover = {
				content: 'loading...'
			};

			productsService.getCategories().then(
				function( data ) {
					scope.categories = data;
				}
			);

			// Get the locale id of a property of a product.
			scope.getId = function( productId, property ) {
				return 'products.' + productId + '.' + property;
			};

			scope.getName = function( productId ) {
				var transId = 'products.' + productId + '.name',
				name = $filter('translate')( transId );
				return name !== transId ? name : productId;
			};

			scope.updatePopoverContent = function( product ) {
				var image = '<img class="img-rounded" src="' + product.img + '"/>',
				transId = 'products.' + product.id + '.description',
				description = $filter('translate')( transId );
				description = description !== transId ? description : '';
				scope.popover.content = $sce.trustAsHtml( image + '<br /><br />' + description );
			}

			scope.getStyle = function( category ) {
				var style = {
					'background-image': 'url(' + category.img + ')',
					'background-repeat': 'no-repeat',
					'background-position': '100%',
					'background-size': 'auto 100px'
				};
				return style;
			};
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );