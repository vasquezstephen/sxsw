/**
 * Created by stephenvasquez on 2/18/16.
 */
(function () {
    'use strict';
    angular
        .module('sxswApp')
        .directive('errSrc', errSrc);
    errSrc.inject = ['$log'];
    function errSrc($log) {
    var errSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function() {
                angular.element(this).attr("src", iAttrs.errSrc);
            });
        }
    };
    return errSrc;
}
})();