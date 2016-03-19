(function() {
   'use strict';

   angular
      .module('speciality', [])
      .service('speciality', specialityService);

   specialityService.$inject = ['apiService'];

   function specialityService(apiService) {


      this.getList = function() {
         return apiService.getList('speciality');
      };
   }
})();
