'use strict';

angular.module('ultimateJobApplierApp')
  .filter('capitalize', function () {
    return function (input) {
      return input.substring(0,1).toUpperCase()+input.substring(1);
    };
  });
