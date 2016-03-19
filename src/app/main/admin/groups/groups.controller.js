(function() {
   'use strict';

   angular
      .module('admin')
      .controller('groupsCtrl', groupsCtrl);


   groupsCtrl.$inject = ['group'];

   function groupsCtrl(group) {
      var vm = this;

      group.getList().then(
         function(response) {
            vm.list = response;
         }
      );

      vm.delete = function (id, $index) {
         group.delete(id).then(
            function() {
               vm.list.splice($index, 1);
            }
         );
      }
   }
})();
