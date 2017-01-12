'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ngMessages']);

myApp.controller('myController', function($scope, $uibModal, $log, usersGenerator, uuid) {
        // $scope.currentPage = 1;
        // $scope.numPerPage = 3;
        // $scope.pageChanged = function() {
        //     $log.log('Page changed to: ' + $scope.currentPage);
        //
        // };
        //
        // $scope.$watch('currentPage + numPerPage', function() {
        //     var begin = $scope.currentPage - 1,
        //         end = begin + $scope.numPerPage;
        //
        //     $scope.users = $scope.users.slice(begin, end, $scope.numPerPage);
        // });

        $scope.sortType = ''; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.resetSort = function() {
            $scope.sortType = '';
            $scope.sortReverse = false;
        };

        $scope.newUser = {
            id: -1,
            name: '',
            gender: '',
            age: 0
        };

        $scope.users = usersGenerator();

        $scope.submitForm = function(isValid) {
            // check to make sure the form is completely valid
            if (isValid) {
                var user = angular.copy($scope.newUser);
                user.id = uuid();
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
                var index = $scope.users.findIndex(function(user) {
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
    })
    .factory('uuid', function () {
        return function () {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }
    })
    .factory('usersGenerator', function(uuid) {
        var sampleDB = [{
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

        var generator = function() {
            var users = [];
            for (var i = 0; i < 10; i++) {
                var index = Math.floor((Math.random() * 4));
                users.push({
                    id: uuid(),
                    name: sampleDB[index].name,
                    age: sampleDB[index].age,
                    gender: sampleDB[index].gender,
                    edit: sampleDB[index].edit
                });
            }

            return users;
        }

        return generator;
    });
