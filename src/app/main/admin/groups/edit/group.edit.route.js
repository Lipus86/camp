(function() {
   'use strict';

   angular
      .module('admin')
      .config(function($stateProvider) {
         $stateProvider
            .state('admin.group', {
               url: '/group/:id',
               templateUrl: '/app/main/admin/groups/edit/group.edit.html',
               controller: 'groupEditCtrl as group'
            });
      });
})();
