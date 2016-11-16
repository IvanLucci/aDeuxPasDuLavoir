(function( module, tplPath ) {

	module.directive( 'deliveryCenter', [ 'deliveryCenterService', function( deliveryCenterService ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'deliveryCenter.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.info = {};

			deliveryCenterService.getInfo().then(function( data ) {
				scope.info = data;
			});
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );