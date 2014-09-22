'use strict';

angular.module('calendar', ['ui.calendar']).controller('MainCtrl', ['$scope', function($scope) {
  
  $scope.eventSources = [
    [ {title: 'It\'s today!', start: new Date()} ]
  ];

  $scope.calendarConfig = {
    startParam: 'startDate'
  };

}]);