'use strict';

angular.module('ultimateJobApplierApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngClipboard'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/coverletter', {
        templateUrl: 'views/coverletter.html',
        controller: 'CoverletterCtrl'
      })
      .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankyouCtrl'
      })
      .when('/interview', {
        templateUrl: 'views/interview.html',
        controller: 'InterviewCtrl'
      })
      .when('/companies', {
        templateUrl: 'views/companies.html',
        controller: 'CompaniesCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('ENV', {
    'name':         'production',
    'apiEndpoint':  'localhost:3000'
  })