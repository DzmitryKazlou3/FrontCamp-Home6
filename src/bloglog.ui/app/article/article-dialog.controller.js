'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('ArticleDialogController', ArticleDialogController);

    ArticleDialogController.$inject = ['articleService', '$uibModalInstance', '$rootScope', 'EVENTS'];

    function ArticleDialogController(articleService, $uibModalInstance, $rootScope, EVENTS) {

        let vm = this;

        vm.article = {};

        vm.save = save;        
        vm.close = function () { $uibModalInstance.dismiss('cancel'); };

        /////////////////////////////////////////////////////
        function save() {

            articleService.addArticle(vm.article)
                .then((pageResult) => {
                    $rootScope.$broadcast(EVENTS.ARTICLE_ADDED, {});
                    $uibModalInstance.close();
                })
                .catch((error) => {
                    alert(error.data);
                });

        }
    }
})();