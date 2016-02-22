(function () {
    'use strict';
    angular
        .module('sxswApp')
        .factory('DBServices', DBServices);
    DBServices.inject = ['$http', '$q', '$log', '$state'];
    function DBServices($http, $q, $log, $state) {
        var token = null;
        return {
            getResults: getResults,
            addEvent: addEvent,
            login: login,
            authenticate: authenticate,
            //upload: upload
        };

        function getResults(){
            return $http.get("api/lists")
                .then(function(response){
                    return response.data;
                });
        }
        function addEvent(stuff){
            return $http.post("api/list",stuff)
                .then(function(response){
                    return response;
                },function(response){
                    $state.go('login')
                });

        }
        function login(userInfo){
            return $http.post("api/login", userInfo)
                .then(function(response){
                    token = response.data;
                    return response;
                });

        }
        function authenticate(){
            return $http.post("api/authenticate", token)
                .then(function (response){
                },function (response){
                    $state.go('login');
                });
        }
        //function upload(photo){
        //    return $http.post("api/upload",photo)
        //        .then(function (response){
        //
        //    });
        //}


        }




})();
