"use strict";angular.module("ultimateJobApplierApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/coverletter",{templateUrl:"views/coverletter.html",controller:"CoverletterCtrl"}).when("/thankyou",{templateUrl:"views/thankyou.html",controller:"ThankyouCtrl"}).when("/interview",{templateUrl:"views/interview.html",controller:"InterviewCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ultimateJobApplierApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("ultimateJobApplierApp").controller("CoverletterCtrl",["$scope",function(a){a.firstP=[{name:""},{name:""},{name:""}],a.secondP=[{name:""},{name:""},{name:""}],a.addP1=function(){a.firstP.push({name:""})},a.addP2=function(){a.secondP.push({name:""})},a.removeP1=function(){a.firstP.pop()},a.removeP2=function(){a.secondP.pop()}}]),angular.module("ultimateJobApplierApp").controller("ThankyouCtrl",["$scope",function(a){a.firstP=[{name:""},{name:""}],a.secondP=[{name:""},{name:""}],a.addP1=function(){a.firstP.push({name:""})},a.addP2=function(){a.secondP.push({name:""})},a.removeP1=function(){a.firstP.pop()},a.removeP2=function(){a.secondP.pop()}}]),angular.module("ultimateJobApplierApp").controller("InterviewCtrl",["$scope","$timeout",function(a,b){a.interviewQuestions=["Tell me about yourself.","Why do you want this position?","Why this field?","What are you looking for in a job?","Walk me through your projects?","What questions do you have for me?"],a.question={value:""},a.getQuestion=function(){a.question.value=a.interviewQuestions.shift()},a.counter=0,a.stopped=!1,a.buttonText="Stop",a.onTimeout=function(){a.counter++,c=b(a.onTimeout,1e3)};var c=b(a.onTimeout,1e3);a.takeAction=function(){a.stopped?(c=b(a.onTimeout,1e3),a.buttonText="Stop"):(b.cancel(c),a.buttonText="Resume"),a.stopped=!a.stopped}}]),angular.module("ultimateJobApplierApp").filter("capitalize",function(){return function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}}),angular.module("ultimateJobApplierApp").filter("formatTime",function(){return function(a){function b(a){return(10>a?"0":"")+a}var c=a%60,d=Math.floor(a/60);return b(d)+":"+b(c)}});