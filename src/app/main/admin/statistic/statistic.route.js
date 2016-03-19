(function() {
   'use strict';

   angular
      .module('admin')
      .config(function($stateProvider) {
         $stateProvider
            .state('admin.statistic', {
               url: '/statistic',
               templateUrl: '/app/main/admin/statistic/statistic.html',
               controller: 'statisticCtrl as statistic'
            });
      });
})();
