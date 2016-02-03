/**
 * Created by stephenvasquez on 1/28/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('RSVPController', RSVPController);

    RSVPController.$inject = ['$log', 'dbService'];
    function RSVPController($log, dbService) {
        var rsvp = this;
        rsvp.list = [{
            title: '',
            description: '',
            link: '',
            image: '',
            date: '',
            dateAdded: ''

        }];
        rsvp.populateList = populateList();
        activate();
        function activate(){
            populateList();
        }
         function populateList(){
             var results = dbService.getRsvpList;
             for (var i=0; i<results.length; i++){
                 rsvp.list.title[i] = results.title[i];
                 rsvp.list.description[i] = results.description[i];
                 rsvp.list.link[i] = results.link[i];
                 rsvp.list.image[i] = results.image[i];
                 rsvp.list.date[i] = results.date[i];
                 rsvp.list.dateAdded[i] = results.dateAdded[i];
             }
         }





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