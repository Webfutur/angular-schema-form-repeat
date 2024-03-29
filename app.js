'use strict';

var formApp = angular.module('formApp', [
    'schemaForm',
    'schemaFormRepeat'
]);

formApp.controller('formController', ['$scope', '$http', function($scope, $http) {

    $http.get('schema.json').success(function(data) {
        $scope.schema = data.schema;
        $scope.form = data.form;
    });

    $scope.model = {};

    $scope.submit = function() {
        $scope.$broadcast('schemaFormValidate');

        if ($scope.myForm.$valid) {
            delete $scope.model.password_confirm;
            delete $scope.model.email_confirm;

            console.log($scope.model);
        }
    };
}]);
