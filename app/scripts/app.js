'use strict';

angular.module('ultimateJobApplierApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });
