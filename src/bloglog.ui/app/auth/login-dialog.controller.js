'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('LogInDialogController', LogInDialogController);

    LogInDialogController.$inject = ['authService', '$uibModalInstance', '$rootScope', 'EVENTS', '$cookies', 'COMMON'];

    function LogInDialogController(authService, $uibModalInstance, $rootScope, EVENTS, $cookies, COMMON) {

        let vm = this;

        vm.user = {};
        vm.user.email = "";
        vm.user.password = "";

        vm.logIn = logIn;
        vm.cancel = cancel;

        /////////////////////////////////////////////////////
        function logIn() {

            authService.logIn(vm.user)
                .then((JWTResult) => {
                    if(!JWTResult.token){
                        alert("JWTResult does not contains token");
                        return;
                    }
                    $cookies.put(COMMON.JWT_TOKEN, JWTResult.token);
                    $cookies.put(COMMON.ID, JWTResult.id);

                    $rootScope.Authorized = true;
                    $rootScope.UserId = JWTResult.id;
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