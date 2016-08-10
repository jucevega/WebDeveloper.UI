﻿(function () {
    'use strict';
    angular.module('app')
    .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state("person", {
            url: '/person',
            templateUrl: 'app/private/person/index.html'
        });
    }

})();
