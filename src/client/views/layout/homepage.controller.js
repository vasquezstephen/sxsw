/**
 * Created by stephenvasquez on 1/28/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];
    function HomeController($log) {
        var home = this;
    }

    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/layout/homepage.html',
                controller: 'HomeController as home',
                authenticate: false,
                data: {
                    pageTitle: 'Home'
                }
            });
    }
})();