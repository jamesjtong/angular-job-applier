'use strict';

angular.module('ultimateJobApplierApp')
  .controller('InterviewCtrl', function ($scope, $timeout) {
    $scope.interviewQuestions = [
      'Tell me about yourself.',
      'Why do you want this position?',
      'Why this field?',
      'What are you looking for in a job?',
      'Walk me through your projects?',
      'What questions do you have for me?'
    ];
    $scope.counter = 0;
    $scope.stopped = false;
    $scope.buttonText='Stop';
    $scope.onTimeout = function(){
      $scope.counter++;
      mytimeout = $timeout($scope.onTimeout,1000);
    };
    var mytimeout = $timeout($scope.onTimeout,1000);
    $scope.takeAction = function(){
      if(!$scope.stopped){
        $timeout.cancel(mytimeout);
        $scope.buttonText='Resume';
      } else {
        mytimeout = $timeout($scope.onTimeout,1000);
        $scope.buttonText='Stop';
      }
    $scope.stopped = !$scope.stopped;
    };
  });