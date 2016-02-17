/**
 * Created by stephenvasquez on 2/14/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .config(configRoutes)
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log','$scope','$state','DBServices'];
    function LoginController($log, $scope, $state, DBServices) {
        var login = this;
        var checkRedirect = function (response){
            if(response.data.success){
                console.log("redirect to ui");
                console.log(response);
                $state.go('ui');
            }
            else{
                console.log(response);
                console.log("did not redirect");
            }

        };

        $scope.checkUser = function checkUser(user){
            console.log(user);
            DBServices.login(user)
                .then(checkRedirect);

        }
    }


    configRoutes.$inject = ['$stateProvider'];
    function configRoutes($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/account/login.html',
                controller: 'LoginController as login',
                data: {
                    pageTitle: 'Login'
                }
            });
    }
})();