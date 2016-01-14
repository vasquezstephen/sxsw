/**
 * Created by v691996 on 1/14/2016.
 */
(function () {
    'use strict';

    angular.module('stevieApp', [

    ])
        .config(csrfConfig)
        .controller('ApplicationController', ApplicationController);

    csrfConfig.$inject = ['csrfProvider'];
    function csrfConfig(csrfProvider) {
        csrfProvider.config({
            url: '/steviedoes/csrfToken'
        });
    }

    //An App controller that changes some of the bounded data in the view if they are not set.
    ApplicationController.$inject = ['$scope', '$anchorScroll', '$rootScope'];
    function ApplicationController($scope, $anchorScroll, $rootScope) {
        var app = this;

        $rootScope.contextUrl = '/steviedoes';
        $scope.isSideNavActive = false;
        $scope.$on('$stateChangeSuccess', onStateChangeSuccess);
        $scope.$on('closeSideNavIfOpen', closeSideNavIfOpen);
        $scope.$on('toggleSideNav', toggleSideNav);
        app.appName = 'stevie';
        app.pageTitle = '';

        function onStateChangeSuccess(toState) {
            $rootScope.$broadcast('closeSideNavIfOpen');
            returnToTop();

            if (toState.data && toState.data.pageTitle) {
                app.pageTitle = app.appName + ' ' + toState.data.pageTitle;
            }

            if (toState.data && toState.data.appName) {
                app.appName = toState.data.appName;
            }
        }
        function closeSideNavIfOpen() {
            if($scope.isSideNavActive) {
                $scope.isSideNavActive = false;
            }
        }
        function toggleSideNav() {
            $scope.isSideNavActive = !$scope.isSideNavActive;
        }

        function returnToTop() {
            $anchorScroll.yOffset = 0;
            $anchorScroll();
        }
    }
})();