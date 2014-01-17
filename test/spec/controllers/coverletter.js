'use strict';

describe('Controller: CoverletterCtrl', function () {

  // load the controller's module
  beforeEach(module('ultimateJobApplierApp'));

  var CoverletterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoverletterCtrl = $controller('CoverletterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
