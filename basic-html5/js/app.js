'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

myApp.controller('myController', function($scope, $uibModal, $log) {
        $scope.users = [{
            name: "John Doe",
            gender: "Male",
            age: 32
        }, {
            name: "Diana Barry",
            gender: "Female",
            age: 28
        }, {
            name: "Bruce Wayne",
            gender: "Male",
            age: 46
        }, {
            name: "Jane Porter",
            gender: "Female",
            age: 19
        }];

        $scope.addUser = function() {
            var user = angular.copy($scope.user);
            $scope.users.push(user);
        }

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
            console.log('nah!!!!');
        }
    })
    .controller('removeUserController', function($scope, $uibModalInstance) {
        $scope.confirm = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }
    });
