/**
 * Created by v691996 on 1/14/2016.
 */
(function () {
    'use strict';

    angular.module('hebApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');


        $stateProvider
            .state('sxsw',{
                abstract:true,
                templateUrl:'views/sxsw/sxsw.html',
                data: {
                    pageTitle: "Stevie Does SXSW"
                }
            })
        .state('rsvp',
            {
                url: '/rsvp',
                templateUrl: 'views/sxsw/rsvp/rsvp_page.html'
            })
    }
    })();