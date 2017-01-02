'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('LogInDialogController', LogInDialogController);

    LogInDialogController.$inject = ['authService', '$mdDialog', '$rootScope', 'EVENTS', '$cookies', 'COMMON'];

    function LogInDialogController(authService, $mdDialog, $rootScope, EVENTS, $cookies, COMMON) {

        let vm = this;

        vm.user = {};
        vm.user.email = "";
        vm.user.password = "";

        vm.ok = ok;
        vm.cancel = cancel;

        /////////////////////////////////////////////////////
        function ok() {
            $mdDialog.hide(vm.user);
        }

        function cancel() {
            $mdDialog.cancel();
        };
    }
})();