/**
 * Created by stephenvasquez on 1/28/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('RSVPController', RSVPController);

    RSVPController.$inject = ['$log','$scope','$location','$anchorScroll','$timeout','DBServices'];
    function RSVPController($log, $scope, $location, $anchorScroll, $timeout ,DBServices) {
        var rsvp = this;
        rsvp.openDivider = false;
        var populateList = function (data) {
            rsvp.list = data;
        };

        DBServices.getResults()
            .then(populateList);
        rsvp.scrollTo = scrollTo;
        rsvp.returnToTop = returnToTop;


        function scrollTo(id) {
            $timeout(function(){
                $location.hash(id);
                $anchorScroll();
            });

        }
        function returnToTop() {
            $anchorScroll.yOffset = 0;
            $anchorScroll();
        }
    }
    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('rsvp', {
                url: '/rsvp',
                templateUrl: 'views/rsvp/rsvp-page.html',
                controller: 'RSVPController as rsvp',
                authenticate: false,
                data: {
                    pageTitle: 'R S V P'
                }
            });
    }
})();