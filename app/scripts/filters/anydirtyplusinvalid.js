'use strict';

angular.module('ultimateJobApplierApp')
  .filter('anyDirtyPlusInvalid', function () {
  return function(form) {
    for(var prop in form) {
      if(form.hasOwnProperty(prop)) {
        if(form[prop].$invalid && form[prop].$dirty) {
          return true;
        }
      }
    }
    return false;
  };
});
