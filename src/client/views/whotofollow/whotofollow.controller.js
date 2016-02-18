/**
 * Created by stephenvasquez on 2/14/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('FollowController', FollowController);

    FollowController.$inject = ['$log'];
    function FollowController($log ) {
        var follow = this;

    }


    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('follow', {
                url: '/who-to-follow',
                templateUrl: 'views/whotofollow/whotofollow.html',
                controller: 'FollowController as follow',
                data: {
                    pageTitle: 'Who To Follow'
                }
            });
    }
})();