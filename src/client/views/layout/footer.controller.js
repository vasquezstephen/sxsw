/**
 * Created by stephenvasquez on 1/28/16.
 */

(function () {
    'use strict';

    angular.module('sxswApp')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$log', 'DBServices'];
    function FooterController($log, DBServices) {
        var footer = this;
        footer.openLogin = false;


    }

})();