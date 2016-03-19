(function() {
   'use strict';

   angular
      .module('admin')
      .config(function($stateProvider) {
         $stateProvider
            .state('admin.subjects', {
               url: '/subjects',
               templateUrl: '/app/main/admin/subjects/subjects.html',
               controller: 'subjectsCtrl as subjects'
            });
      });
})();
