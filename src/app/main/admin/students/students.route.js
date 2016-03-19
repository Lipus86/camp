(function() {
   'use strict';

   angular
      .module('admin')
      .config(function($stateProvider) {
         $stateProvider
            .state('admin.students', {
               url: '/students/:groupID',
               templateUrl: '/app/main/admin/students/students.html',
               controller: 'studentsCtrl as students'
            });
      });
})();
