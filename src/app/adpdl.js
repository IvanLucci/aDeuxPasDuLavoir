(function ( angular, window ){ 

	'use strict';

	window.adpdl = window.adpdl || {};

	//The website main module
	var adpdlModule = angular.module( 'adpdl', [
		'ngAnimate',
		'ngRoute',
		'ngCookies',
		'pascalprecht.translate'
	]);

	var paths = {
		tplPath: 		'app/tpl/',
		contentPath: 	'app/content/',
		localePath: 	'app/content/locale/',
		viewPath:  		'views/',
		prodImgPath:  	'app/content/products/img/',
		servImgPath:  	'app/content/services/img/'
	}

	//App information
	window.adpdl.version 		= '0.0.1';
	window.adpdl.author			= 'Ivan Lucci';
	window.adpdl.title 			= 'A Deux Pas du Lavoir';
	window.adpdl.description 	= 'The website of the multi-service shop in Rodemack (France)';
	window.adpdl.module 		= adpdlModule;
	window.adpdl.paths			= paths;

})( angular, window );