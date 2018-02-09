(function() {
    'use strict';

    angular.module('starter')
        .run(['$rootScope','$state', function($rootScope,$state) {
        	$rootScope.$state = $state;
        }]);
})();
