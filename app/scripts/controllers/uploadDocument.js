'use strict';

/**
 * @ngdoc function
 * @name investmentsCmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the investmentsCmsApp
 */
 angular.module('investmentsCmsApp')
 .controller('UploadDocumentCtrl', function ($scope, Upload) {
 	$scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    fields: {'username': $scope.username},
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                });
            }
        }
    };
});
