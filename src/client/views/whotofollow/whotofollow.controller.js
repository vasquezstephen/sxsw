/**
 * Created by stephenvasquez on 2/14/16.
 */
(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('FollowController', FollowController);

    FollowController.$inject = ['$log', '$scope', 'DBServices', '$sce'];
    function FollowController($log, $scope, DBServices, $sce ) {
        var follow = this;

        follow.screenName = "";

        var populateList = function (data) {
            follow.list = data;
        };

        $scope.getScreenName = function(name) {
            return $sce.trustAsResourceUrl("//platform.twitter.com/widgets/follow_button.html?screen_name=" + name +"&show_count=false");
        };
        DBServices.getFollow()
            .then(populateList);

    }


    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('follow', {
                url: '/who2follow',
                templateUrl: 'views/whotofollow/whotofollow.html',
                controller: 'FollowController as follow',
                data: {
                    pageTitle: 'Who To Follow'
                }
            });
    }
})();