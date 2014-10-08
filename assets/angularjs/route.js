mataGarudaApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/dashboard.html',
		controller: 'DashboardCtrl'
	})
}]);