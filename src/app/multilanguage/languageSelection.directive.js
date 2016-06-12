(function( app, tplPath ) {

	app.directive( 'languageSelection',
		[ 'multilanguageService', '$translate', function( multilanguageService, $translate ) {

		return {
			restrict: 'A',
			templateUrl: tplPath + 'languageSelection.tpl.html',
			scope: {},
			link: link
		};

		function link( scope ) {
			scope.activeLanguages = [];
			var currentLanguage = null;

			multilanguageService.getActiveLanguages().then(
				function( data ) {
					scope.activeLanguages = data;
					currentLanguage = $translate.use();
				}
			);

			scope.getCurrentLanguageId = function() {
				return 'language.' + currentLanguage;
			}

			scope.isActive = function( language ) {
				return currentLanguage === language;
			}

			scope.changeLanguage = function( language ) {
				$translate.use( language );
				currentLanguage = language;
			}
		}

	}]);

})( window.adpdl.module,
	window.adpdl.paths.tplPath );