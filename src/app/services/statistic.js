(function() {
   'use strict';

   angular
      .module('statistic', [])
      .service('statistic', statisticService);

   statisticService.$inject = ['$http', '$q', 'apiServer'];

   function statisticService($http, $q, apiServer) {
      var entities = {
         3: {
            text: 'Subjects',
            api_name: 'subject',
            state: 'admin.subjects'
         },
         2: {
            text: 'Groups',
            api_name: 'group',
            state: 'admin.groups'
         },
         1: {
            text: 'Faculty',
            api_name: 'faculty',
            state: 'admin.faculties'
         }
      };


      this.getData = function() {
         var def = $q.defer();
         var promises = [];
         
         angular.forEach(entities, function(value, key) {
            promises.push(
               $http({
                  method: 'GET',
                  url: apiServer + '/' + value.api_name + '/countRecords',
                  headers: {
                     'Content-Type': 'application/x-www-form-urlencoded'
                  }
               }).then(function(response) {
                  entities[key].count = response.data.numberOfRecords;
               })
            );
         });
         $q.all(promises).then(
            function () {
               def.resolve(entities);
            },
            function () {
               def.reject();
            }
         );
         return def.promise;
      }
   }
})();
