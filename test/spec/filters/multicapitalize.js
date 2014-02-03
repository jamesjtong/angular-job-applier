'use strict';

describe('Filter: multiCapitalize', function () {

  // load the filter's module
  beforeEach(module('ultimateJobApplierApp'));

  // initialize a new instance of the filter before each test
  var multiCapitalize;
  beforeEach(inject(function ($filter) {
    multiCapitalize = $filter('multiCapitalize');
  }));

  it('should return the input prefixed with "multiCapitalize filter:"', function () {
    var text = 'angularjs';
    expect(multiCapitalize(text)).toBe('multiCapitalize filter: ' + text);
  });

});
