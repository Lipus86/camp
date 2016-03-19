(function() {
   'use strict';

   angular
      .module('admin')
      .config(function($stateProvider) {
         $stateProvider
            .state('admin.groups', {
               url: '/groups',
               templateUrl: '/app/main/admin/groups/groups.html',
               controller: 'groupsCtrl as groups'
            });
      });
})();
