(function() {
   'use strict';

   angular
      .module('speciality', [])
      .service('speciality', specialityService);

   specialityService.$inject = ['$http', 'apiServer'];

   function specialityService($http, apiServer) {


      this.getList = function() {
         return $http({
            method: 'GET',
            url: apiServer + '/speciality/getRecords',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         }).then(function (response) {
            return response.data;
         });
      };
   }
})();
