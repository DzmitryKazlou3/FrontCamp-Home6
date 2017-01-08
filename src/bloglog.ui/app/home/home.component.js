'use strict';

(function () {

    angular
        .module('bloglog')
        .component('home', {
            templateUrl: 'home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });

    angular
        .module('bloglog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$document','$state', 'authService', 'EVENTS', '$rootScope', '$uibModal', '$mdDialog', '$cookies', 'COMMON'];

    function HomeController($document, $state, authService, EVENTS, $rootScope, $uibModal, $mdDialog, $cookies, COMMON) {

        let vm = this;

        vm.signupDialog = signupDialog;
        vm.loginDialog = loginDialog;

        vm.logOut = function () {
            $cookies.remove(COMMON.JWT_TOKEN);
            $cookies.remove(COMMON.ID);
            $rootScope.Authorized = false;
            $rootScope.UserId = null;
        };

        vm.navigateTo = function(stateName) { 
            $state.go(stateName);
        };

        /////////////////////// sign up //////////////////////
        function signupDialog() {

            $mdDialog.show({
                controller: 'CreateUserDialogController',
                controllerAs: 'vm',
                templateUrl: 'signupModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
            .then(function (user) {
                authService.createUser(user)
                .then((pageResult) => {
                    debugger;
                    // $uibModalInstance.close();
                })
                .catch((error) => {
                    alert(error.message);
                });
            })
            .catch(function () {

            });
        }

        //////////////////////// log in //////////////////
        function loginDialog() {

            $mdDialog.show({
                controller: 'LogInDialogController',
                controllerAs: 'vm',
                templateUrl: 'loginModalContent.html',
                parent: angular.element(document.body),
                bindToController: true,
                clickOutsideToClose: false,
                escapeToClose: true,
                fullscreen: false // Only for -xs, -sm breakpoints.
            })
            .then(function (user) {

                authService.logIn(user)
                    .then((JWTResult) => {
                        if(!JWTResult.token){
                            alert("JWTResult does not contains token");
                            return;
                        }
                        $cookies.put(COMMON.JWT_TOKEN, JWTResult.token);
                        $cookies.put(COMMON.ID, JWTResult.id);

                        $rootScope.Authorized = true;
                        $rootScope.UserId = JWTResult.id;
                    })
                    .catch((error) => {
                        alert(error.message);
                    });

            })
            .catch(function () {
console.log("cancel");
            });

        }
    }
})();