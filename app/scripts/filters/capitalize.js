'use strict';

angular.module('ultimateJobApplierApp')
  .filter('capitalize', function () {
    return function (input, type) {
      if (type==='multi'){
        var eachWord= input.split(' ');
        var modifiedArr=[];
        for (var i=0;i<eachWord.length;i++){
          modifiedArr.push(eachWord[i].substring(0,1 ).toUpperCase()+eachWord[i].substring(1));
        }
        return modifiedArr.join(' ');
      } else {
        return input.substring(0,1).toUpperCase()+input.substring(1);
      }
    };
  });
