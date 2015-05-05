'use strict';

/**
 * @ngdoc function
 * @name investmentsCmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the investmentsCmsApp
 */
 angular.module('investmentsCmsApp')
 .controller('MainCtrl', function ($scope) {
 	$scope.documents = [
 	{"user":"John", "section":"Shares", "name":"Document 1"},
 	{"user":"Anna", "section":"Calendar", "name":"Document 2"},
 	{"user":"Peter", "section":"Other", "name":"Document 3"}
 	];
 });
