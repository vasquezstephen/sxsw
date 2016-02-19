/**
 * Created by stephenvasquez on 1/28/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('RSVPController', RSVPController);

    RSVPController.$inject = ['$log', '$scope', '$location', '$anchorScroll', '$timeout', 'DBServices'];
    function RSVPController($log, $scope, $location, $anchorScroll, $timeout, DBServices) {
        var rsvp = this;
        rsvp.tab = 1;
        rsvp.prevTab = null;
        rsvp.limit = {
            i1: 8,
            i10: 4,
            i11: 4,
            i12: 4,
            i13: 4,
            i14: 4,
            i15: 4,
            i16: 4,
            i17: 4,
            i18: 4,
            i19: 4,
            i20: 4
        };
        var populateList = function (data) {
            rsvp.list = data;
        };

        DBServices.getResults()
            .then(populateList);
        rsvp.scrollTo = scrollTo;
        rsvp.returnToTop = returnToTop;
        rsvp.setTab = setTab;
        rsvp.isSet = isSet;


        function scrollTo(id) {
            $timeout(function () {
                $location.hash(id);
                $anchorScroll();
            });

        }

        function returnToTop() {
            $anchorScroll.yOffset = 0;
            $anchorScroll();
        }

        function setTab(tabId) {
            rsvp.prevTab = rsvp.tab;
            rsvp.tab = tabId;
        }

        function isSet(tabId) {
            return rsvp.tab === tabId;
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