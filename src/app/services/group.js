(function() {
   'use strict';

   angular
      .module('group', [])
      .service('group', groupService);

   groupService.$inject = ['$http', 'apiServer'];

   function groupService($http, apiServer) {


      this.getList = function() {
         return $http({
            method: 'GET',
            url: apiServer + '/group/getRecords',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         }).then(function (response) {
            return response.data;
         });
      };
      this.getItem = function(id) {
         return $http({
            method: 'GET',
            url: apiServer + '/group/getRecords/' + id,
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         }).then(function (response) {
            return response.data[0];
         });
      };
      this.delete = function (id) {
         return $http({
            method: 'GET',
            url: apiServer + 'group/del/' + id,
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         });
      }
      this.update = function (id, data) {
         return $http({
            method: 'POST',
            url: apiServer + 'group/update/' + id,
            data: data,
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
         });
      }
   }
})();
