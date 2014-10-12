mataGaruda.directive('highcharts', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			chartData: '=value',
			chartObj: '=?'
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		//require: '^DashboardCtrl', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div></div>',
		// templateUrl: '',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs) {

			//console.log(iElm);

			$scope.$watch('chartData', function(value) {
				if (!value)
					return;

				$scope.chartData.chart = {};

				$scope.chartData.chart.renderTo = $scope.chartData.chart.renderTo || iElm[0];

				if (iAttrs.type) {
					$scope.chartData.chart.type = $scope.chartData.chart.type || iAttrs.type;
				};


				if (iAttrs.height) {
					$scope.chartData.chart.height = $scope.chartData.chart.height || iAttrs.height;
				};


				if (iAttrs.width) {
					$scope.chartData.chart.width = $scope.chartData.chart.width || iAttrs.width;
				};


				$scope.chartObj = new Highcharts.Chart($scope.chartData);
			});
			console.log($scope);
			// var config = iAttrs.config;
			// iElm.highcharts($scope.topAttackerConfig);
			
			// console.log(iAttrs.config);

		}
	};
});