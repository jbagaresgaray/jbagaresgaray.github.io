(function(){
	'use strict';

	angular.module('starter')
		.controller('LoginCtrl', ['$scope','$state', function ($scope,$state) {
			
			$scope.loginApp = function(){
				$state.go('dashboards.dashboard_1');
			};

		}]);
})();