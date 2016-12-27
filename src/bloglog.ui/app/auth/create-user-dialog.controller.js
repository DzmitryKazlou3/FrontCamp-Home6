'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('CreateUserDialogController', CreateUserDialogController);

    CreateUserDialogController.$inject = ['authService', '$uibModalInstance', '$rootScope', 'EVENTS'];

    function CreateUserDialogController(authService, $uibModalInstance, $rootScope, EVENTS) {

        let vm = this;

        vm.user = {};
        vm.user.name = "";
        vm.user.email = "";
        vm.user.password = "";

        vm.save = save;
        vm.cancel = cancel;

        /////////////////////////////////////////////////////
        function save() {

            authService.createUser(vm.user)
                .then((pageResult) => {
                    debugger;
                    $uibModalInstance.close();
                })
                .catch((error) => {
                    alert(error.data);
                });

        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();