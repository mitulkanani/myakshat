var app = angular.module('main-App', ['ngRoute','ngResource']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'AdminController'
                }).
                when('/clients', {
                    templateUrl: 'templates/clients.html',
                    controller: 'ItemController'
                }).
                otherwise('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'AdminController'
                });
    }]);