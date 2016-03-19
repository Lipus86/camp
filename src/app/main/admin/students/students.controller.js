(function() {
   'use strict';

   angular
      .module('admin')
      .controller('studentsCtrl', studentsCtrl);

      studentsCtrl.$inject = ['student', '$stateParams'];

      function studentsCtrl(student, $stateParams) {
         var vm = this;

         student.listByGroup($stateParams.groupID).then(
            function(response) {
               vm.list = response;
            }
         );

         vm.delete = function (id, $index) {
            student.delete(id).then(
               function(response) {
                  if (response === 'OK') {
                     vm.list.splice($index, 1);
                  }
               }
            );
         }
      }
})();
