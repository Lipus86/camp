(function() {
   'use strict';

   angular
      .module('admin')
      .config(function($stateProvider) {
         $stateProvider
            .state('admin', {
               url: '/admin',
               abstract: true,
               templateUrl: '/app/main/admin/admin.html',
               controller: 'adminCtrl'
            });
      });
})();
