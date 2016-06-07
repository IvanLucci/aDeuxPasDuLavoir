(function( app ) {

	app.controller( 'langCtrl', [ '$scope', '$translate',  function( $scope, $translate ) {

		$scope.changeLang = function( lang ) {
			$translate.use( lang );
		}

	}]);

})( window.adpdl.module );