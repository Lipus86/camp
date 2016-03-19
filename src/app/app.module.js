(function() {
   'use strict';

   angular
      .module('SoftServeCamp', [
         'ui.router',

         // views
         'admin',
         'dashboard',

         //services
         'statistic',
         'group',
         'subject',
         'speciality',
         'faculty'
      ])
      .config(function($urlRouterProvider, $locationProvider) {

         $urlRouterProvider.otherwise("/");
         $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
         });
      });
})();
