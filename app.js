var app = angular.module('angular-svg', []);

app.controller('MainCtrl', function($scope) {
  $scope.graph = {'width': 100, 'height': 100}
  $scope.circles = [
    {'x': 15, 'y': 20, 'r':15},
    {'x': 50, 'y': 60, 'r':20},
    {'x': 80, 'y': 10, 'r':10},
  ]
});