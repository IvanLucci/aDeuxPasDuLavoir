(function( app, contentPath ) {

	app.factory( 'contactsService', [ '$http', function( $http ) {
		
		return {

			getContacts: function() {
				return $http.get( contentPath + 'contacts/contacts.json' ).then(
					function( res ) {
						return res.data;
					},
					function( error ) {
						throw 'Cannot get the contacts';
					}
				);
			}

		};
	}]);

})( window.adpdl.module,
	window.adpdl.paths.contentPath );