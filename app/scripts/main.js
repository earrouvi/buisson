'use strict';

angular.module('controllers')
	.controller('MainCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$scope.showBlock = function(index) {
			switch(index) {
				case 1:
					$scope.showHome = false;
					$scope.showWhatHappened = true;
					$scope.showContact = false;
					break;
				case 2:
					$scope.showHome = false;
					$scope.showWhatHappened = false;
					$scope.showContact = true;
					break;
				case 0:
				default:
					$scope.showHome = true;
					$scope.showWhatHappened = false;
					$scope.showContact = false;
					break;
			}
		};

		$scope.init = function() {
			$scope.showHome = true;
		};
		$scope.init();
	}]);