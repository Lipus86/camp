(function() {
   'use strict';

   angular
      .module('student', [])
      .service('student', studentService);

   studentService.$inject = ['apiService', '$http', 'apiServer'];

   function studentService(apiService, $http, apiServer) {


      this.getList = function() {
         return apiService.getList('student');
      };
      this.delete = function (id) {
         return apiService.delete('student', id);
      };
      this.listByGroup = function (groupID) {
         return $http({
            method: 'GET',
            url: apiServer + 'student/getStudentsByGroup/' + groupID
         }).then(function (response) {
            if (response.data.response) {
               return;
            }
            return response.data;
         })
      }
   }
})();
