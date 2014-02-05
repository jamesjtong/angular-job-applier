'use strict';

describe('Controller: ThankyouCtrl', function () {

  // load the controller's module
  beforeEach(module('ultimateJobApplierApp'));

  var ThankyouCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThankyouCtrl = $controller('ThankyouCtrl', {
      $scope: scope
    });
  }));

  it('has a first paragraph which starts off with 2 input fields', function () {
    expect(scope.firstP.length).toBe(2);
  });
  it('has a second paragraph which starts off with 2 input fields', function () {
    expect(scope.secondP.length).toBe(2);
  });
  describe('the functions in ThankyouCtrl',function(){
    it('P1 has a way of adding input fields through #addP1',function(){
      scope.addP1();
      expect(scope.firstP.length).toBe(3);
      scope.addP1();
      scope.addP1();
      expect(scope.firstP.length).toBe(5);
    });
    it('P1 has a way of removing input fields through #removeP1',function(){
      scope.removeP1();
      expect(scope.firstP.length).toBe(1);
    });
    it('P2 has a way of adding input fields through #addP2',function(){
      scope.addP2();
      expect(scope.secondP.length).toBe(3);
      scope.addP2();
      scope.addP2();
      expect(scope.secondP.length).toBe(5);
    });
    it('P2 has a way of removing input fields through #removeP2',function(){
      scope.removeP2();
      expect(scope.secondP.length).toBe(1);
    });

  });
});
