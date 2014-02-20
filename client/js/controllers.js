'use strict';

console.log('here');
var bayhillControllers = angular.module('bayhillControllers', []);
console.log('there');

bayhillControllers.controller('LandingCtrl', ['$scope',
  function($scope){

    $scope.bayhillStuff = ['kevin', 'brennan', 'stephen'];

  }]);