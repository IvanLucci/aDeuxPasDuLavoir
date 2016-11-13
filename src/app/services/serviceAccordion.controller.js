(function( module ) {

	module.controller( 'serviceAccordionController', [ '$scope', function( $scope ) {
		$scope.open = {
			laundry: false,
			delivery: false,
			press: false
		};
	}]);

})( window.adpdl.module );