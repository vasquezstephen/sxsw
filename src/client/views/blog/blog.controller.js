/**
 * Created by stephenvasquez on 3/1/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('BlogController', BlogController);

    BlogController.$inject = ['$log', '$scope', 'DBServices', '$sce'];
    function BlogController($log, $scope, DBServices, $sce ) {
        var blog = this;


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