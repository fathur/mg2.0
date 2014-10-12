/**
 * AngularJS Routing
 * 
 * @param  {[type]} $routeProvider    [description]
 * @param  {[type]} $locationProvider [description]
 * @return {[type]}                   [description]
 */

mataGaruda.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/dashboard.html'
	})

	.when('/dashboard', {
		templateUrl: 'views/dashboard.html'
	})

	.when('/dashboard/advanced', {
		template: 'advanced dashboard'
	})

	.when('/monitoring/event', {
		templateUrl: 'views/event.html'
	})

	.otherwise({
		template: '404'
	});
}]);