(function( module, tplPath ) {

	module.directive( 'monthlyArtist', [ 'monthlyArtistService', function( monthlyArtistService ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'monthlyArtist.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.current = {};
			scope.noArtist = false;

			monthlyArtistService.getCurrentArtist().then(function( data ) {
				scope.noArtist = data ? false : true; 
				scope.current = data;
			});
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );