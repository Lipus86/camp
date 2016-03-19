(function() {
   'use strict';

   angular
      .module('apiService', [])
      .service('apiService', apiService);

   apiService.$inject = ['$http', 'apiServer'];

   function apiService($http, apiServer) {


      this.getList = function (entity) {
         return $http({
            method: 'GET',
            url: apiServer + entity + '/getRecords'
         }).then(function (response) {
            return response.data;
         });
      };
      this.count = function (entity) {
         return $http({
            method: 'GET',
            url: apiServer + entity + '/countRecords',
         }).then(function(response) {
            return response.data.numberOfRecords;
         })
      };
      this.delete = function (entity, id) {
         return $http({
            method: 'GET',
            url: apiServer + entity + '/del/' + id
         }).then(
            function () { return 'OK'},
            function (response) {
               if (response && response.data && response.data.response) {
                  alert(response.data.response);
               }
            }
         );
      };
      this.getItem = function (entity, id) {
         return $http({
            method: 'GET',
            url: apiServer + entity + '/getRecords/' + id
         }).then(function (response) {
            return response.data[0];
         });
      };
      this.update = function (entity, id, data) {
         return $http({
            method: 'POST',
            url: apiServer + entity +'/update/' + id,
            data: data
         })
      }
   }
})();
