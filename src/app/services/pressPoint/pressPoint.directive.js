(function( module, tplPath ) {

	module.directive( 'pressPoint', [ 'pressPointService', function( pressPointService ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'pressPoint.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.info = {};

			pressPointService.getInfo().then(function( data ) {
				scope.info = data;
			});
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );