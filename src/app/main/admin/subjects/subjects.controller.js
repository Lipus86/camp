(function() {
   'use strict';

   angular
      .module('admin')
      .controller('subjectsCtrl', subjectsCtrl);

      subjectsCtrl.$inject = ['subject'];

      function subjectsCtrl(subject) {
         var vm = this;

         subject.getList().then(
            function(response) {
               vm.list = response;
            }
         );

         vm.delete = function (id, $index) {
            subject.delete(id).then(
               function() {
                  vm.list.splice($index, 1);
               }
            );
         }
      }
})();
