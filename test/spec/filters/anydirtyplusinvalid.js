'use strict';

describe('Filter: anyDirtyPlusInvalid', function () {

  // load the filter's module
  beforeEach(module('ultimateJobApplierApp'));

  // initialize a new instance of the filter before each test
  var anyDirtyPlusInvalid;
  beforeEach(inject(function ($filter) {
    anyDirtyPlusInvalid = $filter('anyDirtyPlusInvalid');
  }));

  it('should return the input prefixed with "anyDirtyPlusInvalid filter:"', function () {
    var text = 'angularjs';
    expect(anyDirtyPlusInvalid(text)).toBe('anyDirtyPlusInvalid filter: ' + text);
  });

});
