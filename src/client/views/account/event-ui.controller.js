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

    UiController.$inject = ['$log','$scope','DBServices', 'Upload'];
    function UiController($log, $scope, DBServices, Upload) {
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

        function activate() {
            DBServices.authenticate();
        }


        $scope.insertEvent = function insertEvent(event) {
            ui.datNew = angular.copy(event);
            //console.log(ui.datNew);
            DBServices.addEvent(ui.datNew);


        };
        $scope.uploadFiles = function (file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {file: file}
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
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
