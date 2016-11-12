(function( app, tplPath ) {

	app.directive( 'pressing', [ 'pressingService', '$timeout', function( pressingService, $timeout ) {
		
		return {
			restrict: 'A',
			templateUrl: tplPath + 'pressing.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.info = {};
			scope.currentPage1 = scope.currentPage2 = scope.currentPage3 = 1;
			scope.itemsPerPage = 8;
			scope.dynamicStyle = { height: getHeight() };

			pressingService.getInfo().then(
				function( data ) {
					scope.info = data;
				}
			);

			function getHeight() {
				return (scope.itemsPerPage * 37 + 50).toString() + 'px';
			}

			scope.tabChange = function() {
				scope.$broadcast('resetPage');
			};

		}



	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );