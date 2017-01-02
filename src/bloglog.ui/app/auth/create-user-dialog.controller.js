'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('CreateUserDialogController', CreateUserDialogController);

    CreateUserDialogController.$inject = ['authService', '$rootScope', 'EVENTS', '$mdDialog'];

    function CreateUserDialogController(authService, $rootScope, EVENTS, $mdDialog) {

        let vm = this;

        vm.user = {};
        vm.user.name = "";
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