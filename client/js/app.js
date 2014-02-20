'use sctrict';

// Dependencies for the app
var bayhillApp = angular.module('bayhillApp', [
  'ngRoute',
  'bayhillControllers'
]);

// Routes
bayhillApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/landing', {
        templateUrl: '/static/templates/landing.html',
        controller:  'LandingCtrl'
      }).
      otherwise({
        redirectTo:  '/landing'
      });
  }]);