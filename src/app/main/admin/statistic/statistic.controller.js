(function() {
   'use strict';

   angular
      .module('admin')
      .controller('statisticCtrl', statisticCtrl);


   statisticCtrl.$inject = ['statistic', '$state'];

   function statisticCtrl(statistic, $state) {
      var vm = this;

      statistic.getData().then(
         function (response) {
            vm.data = response;
         }
      );

      vm.go = function (state) {
         console.log(state);
         $state.go(state);
      }
   }
})();
