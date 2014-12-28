"use strict";angular.module("ultimateJobApplierApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngClipboard"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/coverletter",{templateUrl:"views/coverletter.html",controller:"CoverletterCtrl"}).when("/thankyou",{templateUrl:"views/thankyou.html",controller:"ThankyouCtrl"}).when("/interview",{templateUrl:"views/interview.html",controller:"InterviewCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("ultimateJobApplierApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("ultimateJobApplierApp").controller("CoverletterCtrl",["$scope",function(a){a.firstP=[{name:""},{name:""},{name:""}],a.secondP=[{name:""},{name:""},{name:""}],a.addP1=function(){a.firstP.push({name:""})},a.addP2=function(){a.secondP.push({name:""})},a.removeP1=function(){a.firstP.pop()},a.removeP2=function(){a.secondP.pop()},a.generateLetter=function(){var a=angular.element("article").text();return a},a.doSomething=function(){console.log("NgClip...")}}]),angular.module("ultimateJobApplierApp").controller("ThankyouCtrl",["$scope",function(a){a.firstP=[{name:""},{name:""}],a.secondP=[{name:""},{name:""}],a.addP1=function(){a.firstP.push({name:""})},a.addP2=function(){a.secondP.push({name:""})},a.removeP1=function(){a.firstP.pop()},a.removeP2=function(){a.secondP.pop()},a.generateLetter=function(){var a=angular.element("article").text();return a},a.doSomething=function(){console.log("NgClip...")}}]),angular.module("ultimateJobApplierApp").controller("InterviewCtrl",["$scope","$timeout",function(a,b){a.interviewQuestions=["Tell me about yourself.","Why do you want this position?","Why this field?","What are you looking for in a job?","Walk me through your projects?","What questions do you have for me?"],a.question={value:""},a.questionRecords=[],a.getQuestion=function(){a.questionRecords.push(a.question.value),a.questionRecords.length>1&&a.questionRecords.push(a.counter-a.storedCounter+" seconds taken to answer"),a.question.value=a.interviewQuestions.shift(),a.storedCounter=a.counter},a.counter=0,a.storedCounter=0,a.stopped=!1,a.buttonText="Stop",a.onTimeout=function(){a.counter++,c=b(a.onTimeout,1e3)};var c=b(a.onTimeout,1e3);a.takeAction=function(){a.stopped?(c=b(a.onTimeout,1e3),a.buttonText="Stop"):(b.cancel(c),a.buttonText="Resume"),a.stopped=!a.stopped}}]),angular.module("ultimateJobApplierApp").controller("LoginCtrl",["$scope",function(){}]),angular.module("ultimateJobApplierApp").filter("capitalize",function(){return function(a,b){if("multi"===b){for(var c=a.split(" "),d=[],e=0;e<c.length;e++)d.push(c[e].substring(0,1).toUpperCase()+c[e].substring(1));return d.join(" ")}return a.substring(0,1).toUpperCase()+a.substring(1)}}),angular.module("ultimateJobApplierApp").filter("formatTime",function(){return function(a){function b(a){return(10>a?"0":"")+a}var c=a%60,d=Math.floor(a/60);return b(d)+":"+b(c)}}),angular.module("ultimateJobApplierApp").filter("anyDirtyPlusInvalid",function(){return function(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b].$invalid&&a[b].$dirty)return!0;return!1}});