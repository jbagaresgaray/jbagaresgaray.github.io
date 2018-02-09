(function() {
    'use strict';

    angular.module('starter')
        .config(config);

    config.$inject = ['$stateProvider','isPRODUCTION'];

    function config($stateProvider,isPRODUCTION) {
        $stateProvider
            .state('app.pushnotif', {
                url: '/pushnotifications',
                templateUrl: 'modules/pushnotifications/pushnotif.html',
                data: {
                    pageTitle: 'Push Notification'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'summernote',
                            files: isPRODUCTION ? 'js/main.min.js' : ['styles/plugins/summernote/summernote.css', 'styles/plugins/summernote/summernote-bs3.css', 'scripts/plugins/summernote/summernote.min.js', 'scripts/plugins/summernote/angular-summernote.min.js']
                        }]);
                    }
                }
            });

    }
})();