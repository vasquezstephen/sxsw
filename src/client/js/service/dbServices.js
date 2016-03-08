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
            getPosts: getPosts,
            getPostByUrlKey: getPostByUrlKey,
            addEvent: addEvent,
            login: login,
            authenticate: authenticate,
            getFollow: getFollow,
            newPost: newPost,
            updateLikes: updateLikes
        };

        function getResults(){
            return $http.get("api/lists")
                .then(function(response){
                    return response.data;
                });
        }
        function getPosts(){
            return $http.get("api/blogs")
                .then(function(response){
                    return response.data;
                });
        }
        function getPostByUrlKey(urlKey){
            var config = {
                params: {urlKey: urlKey}
            };
            return $http.get("api/posts/", config)
                .then(function(response){
                    console.log(response);
                    return response.data;
                })
        }
        function getFollow(){
            return $http.get("api/people")
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
       function newPost(post){
           return $http.post("api/blog", post)
               .then(function(response){
                   return response;
               },function(response){
                   $state.go('login')
               });
       }
        function updateLikes(urlKey, likes){
            var postObj = {
                urlKey: urlKey,
                likes: likes
            };
            return $http.post("api/likes", postObj);

        }


        }




})();
