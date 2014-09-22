'use strict';

angular.module('calendar', ['ui.calendar']).controller('MainCtrl', ['$scope', function($scope) {
  
  $scope.eventSources = [
    [ {title: 'It\'s today!', startDate: new Date()} ]
  ];

  $scope.calendarConfig = {
    startParam: 'startDate'
  };

}]);