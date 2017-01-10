'use strict';

(function () {

    angular.module("bloglog").config(["$stateProvider", "$urlRouterProvider",
     function ($stateProvider, $urlRouterProvider) {
         $stateProvider.state('home', { url: '', component: 'home' });
         $stateProvider.state('articles', { url: '/articles', component: 'articles' });
         $stateProvider.state('articleDetail', { url: '/articles/:id', component: 'articleDetail' });
            
            // { 
            // name: 'people', 
            // url: '/people', 
            // component: 'people',
            // resolve: {
            //     people: function(PeopleService) {
            //     return PeopleService.getAllPeople();
            //     }
            // }
            // },
            
            // { 
            // name: 'people.person', 
            // url: '/{personId}', 
            // component: 'person',
            // resolve: {
            //     person: function(people, $stateParams) {
            //     return people.find(function(person) { 
            //         return person.id === $stateParams.personId;
            //     });
            //     }
            // }
            // }

        $urlRouterProvider.otherwise('');

        
        // Loop over the state definitions and register them
        // states.forEach(function(state) {
        //     $stateProvider.state(state);
        // });

    }]);

})();
