(function() {
   'use strict';

   angular
      .module('group', [])
      .service('group', groupService);

   groupService.$inject = ['apiService'];

   function groupService(apiService) {


      this.getList = function() {
         return apiService.getList('group');
      };
      this.getItem = function(id) {
         return apiService.getItem('group', id);
      };
      this.delete = function (id) {
         return apiService.delete('group', id);
      };
      this.update = function (id, data) {
         return apiService.delete('group', id, data);
      }
   }
})();
