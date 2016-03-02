/**
 * Created by v691996 on 1/14/2016.
 */
(function () {
    'use strict';

    angular.module('sxswApp', [
            'ui.router',
            'ngAnimate',
            'ngTouch',
            'ngTouch',
            'ngSanitize'

        ])
        .config(configRoutes)
        .controller('ApplicationController', ApplicationController);


    configRoutes.$inject = ['$urlRouterProvider'];
    function configRoutes($urlRouterProvider){
        $urlRouterProvider
            .otherwise('/');
    }
    //An App controller that changes some of the bounded data in the view if they are not set.
    ApplicationController.$inject = ['$scope', '$anchorScroll', '$rootScope', '$state', '$location','$window'];
    function ApplicationController($scope, $anchorScroll, $rootScope, $state , $location, $window) {
        var app = this;

        app.appName = 'sxsw';
        app.pageTitle = '';

        activate();

        function activate() {
            $scope.$on('$stateChangeSuccess', onStateChangeSuccess);
        }


        function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {
            returnToTop();

            if (toState.data && toState.data.appName) {
                app.appName = toState.data.appName;
            }

            if (toState.data && toState.data.pageTitle) {
                app.pageTitle = "The Cheat Sheet" + ' | ' + toState.data.pageTitle;
            } else {
                app.pageTitle = "The Cheat Sheet";
            }
            if (!$window.ga)
                return;

            $window.ga('send', 'pageview', { page: $location.path() });

        }

        function returnToTop() {
            $anchorScroll.yOffset = 0;
            $anchorScroll();
        }


    }
})();