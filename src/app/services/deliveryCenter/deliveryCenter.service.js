(function( app, paths ) {

	app.factory( 'deliveryCenterService', [ '$http', function( $http ) {
		
		function fixUrl( info ) {
			info.img = paths.servImgPath + info.img;
		}

		return {

			getInfo: function() {
				return $http.get( paths.contentPath + 'services/deliveryCenter/deliveryCenter.json' ).then(
					function( res ) {
						fixUrl( res.data );
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the delivery center info';
					}
				);
			}

		};

	}]);

})( window.adpdl.module,
	window.adpdl.paths );