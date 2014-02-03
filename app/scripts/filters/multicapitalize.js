'use strict';

angular.module('ultimateJobApplierApp')
  .filter('multiCapitalize', function () {
    return function (input) {
      var eachWord= input.split(' ');
      var modifiedArr=[];
      for (var i=0;i<eachWord.length;i++){
        modifiedArr.push(eachWord[i].substring(0,1 ).toUpperCase()+eachWord[i].substring(1));
      }
      return modifiedArr.join(' ');
    };
  });

