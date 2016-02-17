/**
 * Created by stephenvasquez on 2/13/16.
 */
/**
 * Created by stephenvasquez on 1/28/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('UiController', UiController);

    UiController.$inject = ['$log','$scope','DBServices'];
    function UiController($log, $scope, DBServices) {
        var ui = this;
        ui.dateFormat = "";
        ui.addedFormat = "";
        ui.imageFormat = "";
        ui.datNew = {
            //title: "",
            //description: "",
            //date: "",
            //dateAdded: "",
            //image: "",
            //link: ""
    };

        activate();

        function activate(){
            DBServices.authenticate();

        }


        $scope.insertEvent = function insertEvent(event){
            ui.datNew = angular.copy(event);
            //console.log(ui.datNew);
            DBServices.addEvent(ui.datNew);


        }
    }


    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('ui', {
                url: '/ui',
                templateUrl: 'views/account/event-ui.html',
                controller: 'UiController as ui',
                data: {
                    pageTitle: 'Event UI'
                }
            });
    }
})();
