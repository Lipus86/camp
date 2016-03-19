(function() {
   'use strict';

   angular
      .module('subject', [])
      .service('subject', subjectService);

   subjectService.$inject = ['apiService'];

   function subjectService(apiService) {


      this.getList = function() {
         return apiService.getList('subject');
      };
      this.delete = function (id) {
         return apiService.delete('subject', id);
      };
   }
})();
