(function( app ) {

	app.config([ '$routeProvider', function( $routeProvider ) {

		"use strict";

		$routeProvider
		.when( '/home', {
			templateUrl: 'views/home.html'
		})
		.when( '/products', {
			templateUrl: 'views/products.html'
		})
		.when( '/services', {
			templateUrl: 'views/services.html'
		})
		.when( '/contacts', {
			templateUrl: 'views/contacts.html'
		})
		.otherwise({
			redirectTo: '/home'
		});

	}]);

})( window.adpdl.module );