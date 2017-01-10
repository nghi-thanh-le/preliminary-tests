'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ngMessages']);

myApp.controller('myController', function($scope, $uibModal, $log) {
        $scope.newUser = {
            name: '',
            gender: '',
            age: 0
        };

        $scope.users = [{
            name: 'John Doe',
            gender: 'Male',
            age: 32,
            edit: true
        }, {
            name: 'Diana Barry',
            gender: 'Female',
            age: 28,
            edit: true
        }, {
            name: 'Bruce Wayne',
            gender: 'Male',
            age: 46,
            edit: true
        }, {
            name: 'Jane Porter',
            gender: 'Female',
            age: 19,
            edit: true
        }];

        $scope.submitForm = function(isValid) {
            // check to make sure the form is completely valid
            if (isValid) {
                var user = angular.copy($scope.newUser);
                user.edit = true;
                $scope.users.push(user);
            }
        };

        $scope.removeUser = function(index) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'removeUser.html',
                controller: 'removeUserController',
                size: 'sm'
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.users.splice(index, 1);
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }

        $scope.editUser = function(index) {
            $scope.users[index].edit = !$scope.users[index].edit;
        }
    })
    .controller('removeUserController', function($scope, $uibModalInstance) {
        $scope.confirm = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        }
    });
