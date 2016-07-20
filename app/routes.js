var app = angular.module('main-App', ['ngRoute', 'ngResource', 'ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.moveColumns']);
app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'ItemController'
                }).
                when('/clients', {
                    templateUrl: 'templates/clients.html',
                    controller: 'ItemController'
                }).
                when('/profile/:pro/:id', {
                    templateUrl: 'templates/uprofile.html',
                    controller: 'ItemController'
                })
                .when('/clients/:cliedit/:id', {
                    templateUrl: 'templates/clients.html',
                    controller: 'ItemController'
                }).
                otherwise('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'ItemController'
                });
    }]);