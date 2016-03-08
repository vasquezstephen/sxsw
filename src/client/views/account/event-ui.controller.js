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
        ui.post = {};

        activate();

        function activate() {
            DBServices.authenticate();
        }


        $scope.insertEvent = function insertEvent(event) {
            ui.datNew = angular.copy(event);
            DBServices.addEvent(ui.datNew);


        };
        $scope.addPost = function addPost(){
            ui.post.createdOn = Date.now();
            ui.post.comments = [];
            ui.post.likes = 0;
            var urlKey = ui.post.title.split(' ').join('-');
            ui.post.urlKey = urlKey.toLowerCase();
            DBServices.newPost(ui.post);
            ui.post ={};

        };

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
