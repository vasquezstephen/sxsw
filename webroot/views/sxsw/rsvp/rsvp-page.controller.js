/**
 * Created by stephenvasquez on 1/28/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('RSVPController', RSVPController);

    RSVPController.$inject = ['$log'];
    function RSVPController($log) {
        var rsvp = this;




    }

    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('rsvp', {
                url: '/sxsw/rsvp',
                templateUrl: 'views/sxsw/rsvp/rsvp-page.html',
                controller: 'RSVPController as rsvp',
                data: {
                    pageTitle: 'R S V P'
                }
            });
    }
})();