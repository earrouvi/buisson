'use strict';

angular.module('controllers')
	.controller('MainCtrl', ['$scope', '$http', '$routeParams', '$location', '$anchorScroll', function ($scope, $http, $routeParams, $location, $anchorScroll) {
		$scope.showBlock = function(index) {
			switch(index) {
				case 1:
					$scope.showHome = false;
					$scope.showWhatHappened = true;
					$scope.showContact = false;
					$location.hash('cancer');
					break;
				case 2:
					$scope.showHome = false;
					$scope.showWhatHappened = false;
					$scope.showContact = true;
					$location.hash('contact');
					break;
				case 0:
				default:
					$scope.showHome = true;
					$scope.showWhatHappened = false;
					$scope.showContact = false;
					$location.hash('home');
					break;
			}
			$anchorScroll();
		};

		$scope.init = function() {
			$scope.showHome = true;
			$scope.locationHash = $location.hash();
		};
		$scope.init();
	}]);