
(function () {
    'use strict';

    angular.module('sxswApp')
        .factory("dbService", dbService);

    dbService.$inject = ['$http'];
    function dbService($http) {

            return {
                getRsvpList: function getRsvpList() {
                    $http.get("/rsvp_list.json")
                        .then(function (response) {
                            console.log(response.data)
                            return response.data;
                        })
                }
            };
    }

})();