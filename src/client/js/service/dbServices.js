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
            authenticate: authenticate
        };

        function getResults(){
            return $http.get("api/lists")
                .then(function(response){
                    return response.data;
                });
        }
        function addEvent(stuff){
            //console.log(stuff);
            return $http.post("api/list",stuff);

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
                    console.log("success");
                },function (response){
                    console.log("failure");
                    $state.go('login');
                });
        }


        }




})();
