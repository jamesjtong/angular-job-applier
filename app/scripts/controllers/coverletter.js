'use strict';

angular.module('ultimateJobApplierApp')
  .controller('CoverletterCtrl', function ($scope) {
    $scope.firstP = [{name: ''},{name: ''},{name: ''}];
    $scope.secondP = [{name: ''},{name: ''},{name: ''}];
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
    $scope.getTextToCopy = function() {
        return 'ngClip is awesome!';
    };
    
    $scope.doSomething = function () {
        console.log('NgClip...');
    };

  });
