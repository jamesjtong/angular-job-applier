'use strict';

angular.module('ultimateJobApplierApp')
  .filter('formatTime', function () {
    return function (input) {
      function z(n) {return (n<10? '0' : '') + n;}
      var seconds = input % 60;
      var minutes = Math.floor(input / 60);
      return (z(minutes)+':'+z(seconds));
    };
  });
