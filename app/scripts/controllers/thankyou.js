'use strict';

angular.module('ultimateJobApplierApp')
  .controller('ThankyouCtrl', function ($scope) {
    $scope.firstP = [{name: ''},{name: ''}];
    $scope.secondP = [{name: ''},{name: ''}];
    $scope.addP1 = function(){
      $scope.firstP.push({name: ''});
    };
    $scope.addP2 = function(){
      $scope.secondP.push({name: ''});
    };
    $scope.removeP1 = function(){
      $scope.firstP.pop();
    };
    $scope.removeP2 = function(){
      $scope.secondP.pop();
    };
    $scope.generateLetter = function() {
      var articleText = angular.element('article').text();
      return articleText;
    };
    $scope.doSomething = function () {
      console.log('NgClip...');
    };
  });
