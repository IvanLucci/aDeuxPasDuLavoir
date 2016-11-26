(function( module, tplPath ) {

	module.directive( 'massage', [ 'massageService', function( massageService ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'massage.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.info = {};

			massageService.getInfo().then(function( data ) {
				scope.info = data;
			});
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );