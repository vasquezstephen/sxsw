/**
 * Created by stephenvasquez on 3/7/16.
 */
/**
 * Created by stephenvasquez on 3/1/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('BlogPostController', BlogPostController);

    BlogPostController.$inject = ['$log', '$scope', 'DBServices', '$sce', '$state'];
    function BlogPostController($log, $scope, DBServices, $sce, $state) {
        var post = this;

        activate();

        function activate(){
            getPostData($state.params.urlKey);
        }
        function getPostData(urlKey){
            return DBServices.getPostByUrlKey(urlKey)
                .then(function (response){
                    setPost(response);
                })
        }
        function setPost(data){
            post.list = data;
            post.list.body = post.list.body.split("\n").join("<br><br>");
        }
        post.likePost = function (){
            post.list.likes = post.list.likes+1;
            DBServices.updateLikes($state.params.urlKey, post.list.likes);
        }
    }


    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('blog-post', {
                url: '/blog-post/{urlKey}',
                templateUrl: 'views/blog/blog-post.html',
                controller: 'BlogPostController as post',
                data: {
                    pageTitle: 'BlogPost'
                }
            });
    }
})();