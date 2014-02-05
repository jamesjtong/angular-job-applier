'use strict';

describe('Filter: multiCapitalize', function () {

  // load the filter's module
  beforeEach(module('ultimateJobApplierApp'));

  // initialize a new instance of the filter before each test
  var multiCapitalize;
  beforeEach(inject(function ($filter) {
    multiCapitalize = $filter('multiCapitalize');
  }));

  it('should return the input prefixed with "multiCapitalize filter:" it capitalizes all words', function () {
    var text = 'angularjs is awesommmmeee';
    expect(multiCapitalize(text)).toBe('Angularjs Is Awesommmmeee');
  });

  it('should ignore words that start with a number',function(){
    var text='33jam 3a aa';
    expect(multiCapitalize(text)).toEqual('33jam 3a Aa');
  });

});
