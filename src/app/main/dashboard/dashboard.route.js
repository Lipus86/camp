(function() {
   'use strict';

   angular
      .module('dashboard')
      .config(function($stateProvider) {
         $stateProvider
            .state('dashboard', {
               url: '/dashboard',
               templateUrl: 'app/main/dashboard/dashboard.html'
            });
      });
})();
