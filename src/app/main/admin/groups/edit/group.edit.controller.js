(function() {
   'use strict';

   angular
      .module('admin')
      .controller('groupEditCtrl', groupEditCtrl);


   groupEditCtrl.$inject = ['group', '$stateParams', '$state', 'speciality', 'faculty'];

   function groupEditCtrl(group, $stateParams, $state, speciality, faculty) {
      var vm = this,
          id = $stateParams.id;

      group.getItem(id).then(
         function(response) {
            vm.item = response;
         }
      );
      speciality.getList().then(
         function (response) {
            vm.speciality = response;
         }
      );
      faculty.getList().then(
         function (response) {
            vm.faculty = response;
         }
      );

      vm.update = function () {
         group.update(id, vm.item).then(
            function() {
               $state.go('admin.groups');
            }
         );
      }
   }
})();
