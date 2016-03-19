(function() {
   'use strict';

   angular
      .module('SoftServeCamp', [
         'ui.router',

         // views
         'admin',
         'dashboard',

         //services
         'apiService',
         'statistic',
         'group',
         'subject',
         'speciality',
         'faculty',
         'student'
      ])
      .config(function($urlRouterProvider, $locationProvider) {

         $urlRouterProvider.otherwise("/");
         $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
         });
      });
})();
