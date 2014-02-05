'use strict';

describe('Filter: capitalize', function () {

  // load the filter's module
  beforeEach(module('ultimateJobApplierApp'));

  // initialize a new instance of the filter before each test
  var capitalize;
  beforeEach(inject(function ($filter) {
    capitalize = $filter('capitalize');
  }));

  it('should return the input prefixed with "capitalize filter:" it only capitalizes the first word', function () {
    var text = 'angularjs s';
    expect(capitalize(text)).toEqual('Angularjs s');
  });

  it('should not capitalize the second word',function(){
    var text='hi james';
    expect(capitalize(text)).toEqual('Hi james');
  });

  it('should not alter numbers', function () {
    var text = '1angularjs s';
    expect(capitalize(text)).toBe('1angularjs s');
  });
  
});
