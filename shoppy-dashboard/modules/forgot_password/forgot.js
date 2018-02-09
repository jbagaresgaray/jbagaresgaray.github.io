(function() {
    'use strict';

    angular.module('starter')
        .config(forgotConfig);

    forgotConfig.$inject = ['$stateProvider'];

    function forgotConfig($stateProvider) {
        $stateProvider
            .state('forgot_password', {
                url: '/forgot_password',
                templateUrl: 'modules/forgot_password/forgot_password.html',
                data: { pageTitle: 'Forgot Password', specialClass: 'gray-bg' }
            });
    }
})();