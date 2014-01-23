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
    $scope.question = {value: ''};
    $scope.getQuestion = function(){
      $scope.question.value = $scope.interviewQuestions.shift();
    };
    
    $scope.counter = 0;
    $scope.onTimeout = function(){
      $scope.counter++;
      mytimeout = $timeout($scope.onTimeout,1000);
    };
    var mytimeout = $timeout($scope.onTimeout,1000);
    
    $scope.stop = function(){
      $timeout.cancel(mytimeout);
    };
            
  });
