'use strict';

angular.module('calendar', ['ui.calendar']).controller('MainCtrl', ['$scope', function($scope) {
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $scope.eventSources = [
    [ {title: 'First of month happenings', startDate: new Date(y, m, 1)} ]
  ];

  $scope.calendarConfig = {
    startParam: 'startDate'
  };

}]);