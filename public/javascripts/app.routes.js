angular.module('referralApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/TopReleases/pages', {

		templateUrl: '/views/pages/topreleases/topreleases.html',
		controller: "TopReleasesController"
	})
	

	
	// .otherwise({ redirectTo: '/TopReleases' })
});

angular.module('referralApp')
.run(function($rootScope, $location) {
    $rootScope.location = $location;
});