(function() {
   'use strict';

   angular
      .module('subject', [])
      .service('subject', subjectService);

   subjectService.$inject = ['$http', 'apiServer'];

   function subjectService($http, apiServer) {


      this.getList = function() {
         return $http({
            method: 'GET',
            url: apiServer + '/subject/getRecords',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         }).then(function (response) {
            return response.data;
         });
      };
      this.delete = function (id) {
         return $http({
            method: 'GET',
            url: apiServer + 'subject/del/' + id,
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         });
      }
   }
})();
