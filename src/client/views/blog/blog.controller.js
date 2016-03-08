/**
 * Created by stephenvasquez on 3/1/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('BlogController', BlogController);

    BlogController.$inject = ['$log', '$scope', 'DBServices', '$sce','$state'];
    function BlogController($log, $scope, DBServices, $sce, $state) {
        var blog = this;

        blog.tab = 'blog';

        activate();

        function activate() {
            $scope.$on('$stateChangeStart', onStateChangeStart);
        }

        function onStateChangeStart() {
            blog.tab = 'blog';
        }

        blog.goToPost = function (urlKey){
            $state.go('blog-post', {urlKey: urlKey})
        };
        blog.selectTab = function (setTab) {
            blog.tab = setTab;
            console.log(blog.tab)
        };
        blog.isSelected = function (checkTab) {
            return blog.tab === checkTab;
        };
        var populateList = function (data) {
            blog.posts = data;
        };

        DBServices.getPosts()
            .then(populateList);

    }


    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('blog', {
                url: '/blog',
                templateUrl: 'views/blog/blog.html',
                controller: 'BlogController as blog',
                data: {
                    pageTitle: 'Blog'
                }
            });
    }
})();