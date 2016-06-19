(function( app, tplPath ) {

	app.directive( 'contacts', [ 'contactsService', function( contactsService ) {

		return {
			restrict: 'A',
			scope: {},
			templateUrl: tplPath + 'contacts.tpl.html',
			link: link			
		};

		function link( scope ) {
			scope.contacts = null;

			contactsService.getContacts().then(
				function( data ) {
					scope.contacts = data;
				}
			);
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );