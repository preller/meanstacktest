'use strict';
(function(){

    var app = angular.module('meanstacktestApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main2.html',
                controller: 'Main2Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}.call(this));
