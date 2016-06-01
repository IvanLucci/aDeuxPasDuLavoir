(function ( angular, window ){ 

	"use strict";

	window.adpdl = window.adpdl || {};

	//The website main module
	var adpdlModule = angular.module( 'adpdl', [
		'ngAnimate',
		'ngRoute',
		'pascalprecht.translate'
	]);

	//App information
	window.adpdl.version 		= '0.0.1';
	window.adpdl.author			= 'Ivan Lucci';
	window.adpdl.title 			= 'A Deux Pas du Lavoir';
	window.adpdl.description 	= 'The website of the multi-service shop in Rodemack (France)';
	window.adpdl.module 		= adpdlModule;

})( angular, window );