(function( module ) {

	module.controller( 'serviceAccordionController', [ '$scope', function( $scope ) {
		$scope.open = {
			laundry: false,
			delivery: false,
			press: false,
			massage: false
		};
	}]);

})( window.adpdl.module );