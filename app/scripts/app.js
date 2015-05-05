'use strict';

/**
 * @ngdoc overview
 * @name investmentsCmsApp
 * @description
 * # investmentsCmsApp
 *
 * Main module of the application.
 */
angular
  .module('investmentsCmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'ngFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/upload', {
        templateUrl: 'views/uploadDocument.html',
        controller: 'UploadDocumentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
