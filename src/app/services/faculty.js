(function() {
   'use strict';

   angular
      .module('faculty', [])
      .service('faculty', facultyService);

   facultyService.$inject = ['$http', 'apiServer'];

   function facultyService($http, apiServer) {


      this.getList = function() {
         return $http({
            method: 'GET',
            url: apiServer + '/faculty/getRecords',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         }).then(function (response) {
            return response.data;
         });
      };
   }
})();
