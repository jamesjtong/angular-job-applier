'use strict';

angular.module('ultimateJobApplierApp')
  .controller('CompaniesCtrl', function ($scope, ENV, Restangular) {
    //example for ng options with an array of objects
    $scope.companies = [
      {
        name: "ABC Soap Shop",
        id: 1,
        revenue: 5000,
        type: "brick_and_mortar"
      },
      {
        name: "Pizza Haven",
        id: 2,
        revenue: 100000,
        type: "brick_and_mortar"
      },
      {
        name: "XYZ Mac Repair",
        id: 3,
        revenue: 45000,
        type: "brick_and_mortar"
      },
      {
        name: "Facebook",
        id: 4,
        revenue: 8999999,
        type: "online"
      },
      {
        name: "Apple",
        id: 5,
        revenue: 999999999999,
        type: "online"
      }
    ]

    //example for ng options using an object
    $scope.myStats = {
      speed:5,
      agility:6,
      strength:7,
      wisdom:8,
      vitality:9
    }

    $scope.selectedCompany = $scope.companies[0];

    var endpoint = ENV.apiEndpoint;
  });
