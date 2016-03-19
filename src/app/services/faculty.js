(function() {
   'use strict';

   angular
      .module('faculty', [])
      .service('faculty', facultyService);

   facultyService.$inject = ['apiService'];

   function facultyService(apiService) {


      this.getList = function() {
         return apiService.getList('faculty');
      };
   }
})();
