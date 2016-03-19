(function() {
   'use strict';

   angular
      .module('statistic', [])
      .service('statistic', statisticService);

   statisticService.$inject = ['$q', 'apiService'];

   function statisticService($q, apiService) {
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
               apiService.count(value.api_name).then(
                  function (count) {
                     entities[key].count = count;
                  }
               )
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
