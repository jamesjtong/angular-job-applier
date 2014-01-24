'use strict';
angular.module('ultimateJobApplierApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/coverletter', {
      templateUrl: 'views/coverletter.html',
      controller: 'CoverletterCtrl'
    }).when('/thankyou', {
      templateUrl: 'views/thankyou.html',
      controller: 'ThankyouCtrl'
    }).when('/interview', {
      templateUrl: 'views/interview.html',
      controller: 'InterviewCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
angular.module('ultimateJobApplierApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
angular.module('ultimateJobApplierApp').controller('CoverletterCtrl', [
  '$scope',
  function ($scope) {
    $scope.firstP = [
      { name: '' },
      { name: '' },
      { name: '' }
    ];
    $scope.secondP = [
      { name: '' },
      { name: '' },
      { name: '' }
    ];
    $scope.addP1 = function () {
      $scope.firstP.push({ name: '' });
    };
    $scope.addP2 = function () {
      $scope.secondP.push({ name: '' });
    };
    $scope.removeP1 = function () {
      $scope.firstP.pop();
    };
    $scope.removeP2 = function () {
      $scope.secondP.pop();
    };
  }
]);
'use strict';
angular.module('ultimateJobApplierApp').controller('ThankyouCtrl', [
  '$scope',
  function ($scope) {
    $scope.firstP = [
      { name: '' },
      { name: '' },
      { name: '' }
    ];
    $scope.secondP = [
      { name: '' },
      { name: '' },
      { name: '' }
    ];
    $scope.addP1 = function () {
      $scope.firstP.push({ name: '' });
    };
    $scope.addP2 = function () {
      $scope.secondP.push({ name: '' });
    };
    $scope.removeP1 = function () {
      $scope.firstP.pop();
    };
    $scope.removeP2 = function () {
      $scope.secondP.pop();
    };
  }
]);
'use strict';
angular.module('ultimateJobApplierApp').controller('InterviewCtrl', [
  '$scope',
  '$timeout',
  function ($scope, $timeout) {
    $scope.interviewQuestions = [
      'Tell me about yourself.',
      'Why do you want this position?',
      'Why this field?',
      'What are you looking for in a job?',
      'Walk me through your projects?',
      'What questions do you have for me?'
    ];
    $scope.question = { value: '' };
    $scope.getQuestion = function () {
      $scope.question.value = $scope.interviewQuestions.shift();
    };
    $scope.counter = 0;
    $scope.onTimeout = function () {
      $scope.counter++;
      mytimeout = $timeout($scope.onTimeout, 1000);
    };
    var mytimeout = $timeout($scope.onTimeout, 1000);
    $scope.stop = function () {
      $timeout.cancel(mytimeout);
    };
  }
]);