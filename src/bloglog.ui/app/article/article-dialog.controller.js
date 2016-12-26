'use strict';

(function () {

    angular
        .module('bloglog')
        .controller('ArticleDialogController', ArticleDialogController);

    ArticleDialogController.$inject = ['articleService', '$rootScope', 'EVENTS'];

    function ArticleDialogController(articleService, $rootScope, EVENTS) {

        let vm = this;
        vm.save = save;
        vm.article = {};

        // TODO: move it to back end.
        vm.article.user = {};
        vm.article.user.user_id = "some user id";
        vm.article.user.name = "some user name";

        /////////////////////////////////////////////////////
        function save() {

            articleService.addArticle(vm.article)
                .then((pageResult) => {
                    cleanForm();
                    $rootScope.$broadcast(EVENTS.ARTICLE_ADDED, {});
                })
                .catch((error) => {
                    alert(error.data);
                });

        }

        function cleanForm(){
            vm.article.title = "";
            vm.article.text = "";
            vm.article.tags = "";
        }
    }
})();