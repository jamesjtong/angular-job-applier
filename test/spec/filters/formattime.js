'use strict';

describe('Filter: formatTime', function () {

  // load the filter's module
  beforeEach(module('ultimateJobApplierApp'));

  // initialize a new instance of the filter before each test
  var formatTime;
  beforeEach(inject(function ($filter) {
    formatTime = $filter('formatTime');
  }));

  it('takes in a string with a number greater than 100 and outputs a into xx:xx format', function () {
    var text = '100';
    expect(formatTime(text)).toEqual('01:40');
  });

  it('takes in a string with a number less than 60 and outputs a into xx:xx format', function () {
    var text = '30';
    expect(formatTime(text)).toEqual('00:30');
  });
});
