var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/list.html',
            controller: 'empController'
        })
        .when('/employees', {
            templateUrl: 'templates/list.html',
            controller: 'empController'
        })
        .when('/employees/create', {
            templateUrl: 'templates/add.html',
            controller: 'empController'
        })
        .when('/employees/:id/edit', {
            templateUrl: 'templates/edit.html',
            controller: 'empController'
        })
        .when('/employees/:id/show', {
            templateUrl: 'templates/show.html',
            controller: 'empController'
        });
    $locationProvider.hashPrefix('');  //This will remove the %2F from the link
});