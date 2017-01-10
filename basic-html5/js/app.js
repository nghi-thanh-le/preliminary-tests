'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ngMessages']);

myApp.controller('myController', function($scope, $uibModal, $log) {
        $scope.sortType = ''; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.resetSort = function () {
            $scope.sortType = '';
            $scope.sortReverse = false;
        };

        $scope.newUser = {
            id: -1,
            name: '',
            gender: '',
            age: 0
        };

        $scope.users = [{
            id: 0,
            name: 'John Doe',
            gender: 'Male',
            age: 32,
            edit: true
        }, {
            id: 1,
            name: 'Diana Barry',
            gender: 'Female',
            age: 28,
            edit: true
        }, {
            id: 2,
            name: 'Bruce Wayne',
            gender: 'Male',
            age: 46,
            edit: true
        }, {
            id: 3,
            name: 'Jane Porter',
            gender: 'Female',
            age: 19,
            edit: true
        }];

        $scope.submitForm = function(isValid) {
            // check to make sure the form is completely valid
            if (isValid) {
                var user = angular.copy($scope.newUser);
                user.id = $scope.users.length;
                user.edit = true;
                $scope.users.push(user);
                console.log($scope.users);
            }
        };

        $scope.removeUser = function(userId) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'removeUser.html',
                controller: 'removeUserController',
                size: 'sm'
            });

            modalInstance.result.then(function(selectedItem) {
                var index = $scope.users.findIndex(function (user) {
                    return user.id == userId;
                });
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
