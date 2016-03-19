(function() {
   'use strict';

   angular
      .module('SoftServeCamp')
      .config(function($stateProvider) {
         $stateProvider
            .state('main', {
               url: '/'
            });
      });
})();
