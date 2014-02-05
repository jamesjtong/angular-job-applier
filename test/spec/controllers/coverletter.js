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

  it('has a first paragraph which starts off with 3 input fields', function () {
    expect(scope.firstP.length).toBe(3);
  });
  it('has a second paragraph which starts off with 3 input fields', function () {
    expect(scope.secondP.length).toBe(3);
  });
  describe('the functions in ThankyouCtrl',function(){
    it('P1 has a way of adding input fields through #addP1',function(){
      scope.addP1();
      expect(scope.firstP.length).toBe(4);
      scope.addP1();
      scope.addP1();
      expect(scope.firstP.length).toBe(6);
    });
    it('P1 has a way of removing input fields through #removeP1',function(){
      scope.removeP1();
      expect(scope.firstP.length).toBe(2);
    });
    it('P2 has a way of adding input fields through #addP2',function(){
      scope.addP2();
      expect(scope.secondP.length).toBe(4);
      scope.addP2();
      scope.addP2();
      expect(scope.secondP.length).toBe(6);
    });
    it('P2 has a way of removing input fields through #removeP2',function(){
      scope.removeP2();
      expect(scope.secondP.length).toBe(2);
    });

  });
});
