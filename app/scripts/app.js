'use strict';

angular.module('buissonApp', [
  'ngRoute',
  'controllers',
  'services',
  'directives'
])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	    .when('/', {
	        templateUrl: '../views/main.html',
	        controller: 'MainCtrl'
	    })
	    .otherwise({
	      redirectTo: '/'
	    });
}]);

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);