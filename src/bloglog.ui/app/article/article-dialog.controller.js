'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('ArticleDialogController', ArticleDialogController);

    ArticleDialogController.$inject = ['articleService', '$uibModalInstance', '$rootScope', 'EVENTS', 'existingArticle'];

    function ArticleDialogController(articleService, $uibModalInstance, $rootScope, EVENTS, existingArticle) {

        let vm = this;
        vm.article = existingArticle ? existingArticle : {};

        vm.save = save;        
        vm.close = function () { $uibModalInstance.dismiss('cancel'); };

        /////////////////////////////////////////////////////
        function save() {
            if (existingArticle) {
                articleService.updateArticle(vm.article)
                    .then((pageResult) => {
                        $rootScope.$broadcast(EVENTS.ARTICLE_ADDED, {});
                        $uibModalInstance.close();
                    })
                    .catch((error) => {
                        alert(error.data);
                    });
            }
            else {
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
    }
})();