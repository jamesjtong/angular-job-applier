'use strict';

describe('Controller: InterviewCtrl', function () {

  // load the controller's module
  beforeEach(module('ultimateJobApplierApp'));

  var InterviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterviewCtrl = $controller('InterviewCtrl', {
      $scope: scope
    });
  }));

  it('should start off with 6 interview questions', function () {
    expect(scope.interviewQuestions.length).toBe(6);
  });
  it('should have a counter that starts at 0', function () {
    expect(scope.counter).toEqual(0);
  });

});
