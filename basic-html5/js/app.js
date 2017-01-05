'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', []);

myApp.controller('myController', function ($scope) {
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
});
