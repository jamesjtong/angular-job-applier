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

  describe('the getQuestion function',function(){
    it('increases the length of questionRecords by 1 when there is something in interviewQuestions',function(){
      scope.getQuestion();
      expect(scope.questionRecords.length).toBe(1);
    });

    it('will pop an undefined value into questionRecords when there is nothing left in interviewQuestions', function(){
      scope.interviewQuestions = [];
      scope.getQuestion();
      expect(scope.question.value).toBeUndefined();
      expect(scope.question).toEqual({value:undefined});
    });

    it('should count the amount of time in between each question',function(){
      scope.onTimeout();
      scope.getQuestion();
      scope.onTimeout();
      scope.onTimeout();
      scope.onTimeout();
      scope.onTimeout();
      scope.getQuestion();
      expect(scope.questionRecords.pop()).toEqual('4 seconds taken to answer');
    });


  });

  describe('timer',function(){
    it('should have a counter that starts at 0', function () {
      expect(scope.counter).toEqual(0);
    });
    it('should start off with a stored timer of 0',function(){
      expect(scope.storedCounter).toEqual(0);
    });
    it('should properly time with #onTimeout',function(){
      scope.onTimeout();
      scope.onTimeout();
      expect(scope.counter).toEqual(2);
    });

  });


});
