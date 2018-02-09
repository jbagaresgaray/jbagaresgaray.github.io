(function() {
    'use strict';

    angular.module('starter')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('mailbox.issuetracker', {
                url: '/issuetracker',
                templateUrl: 'modules/helpcenter/issuetracker.html',
                data: {
                    pageTitle: 'Issue Tracker'
                }
            })
            .state('mailbox.inbox', {
                url: '/helpinbox',
                templateUrl: 'modules/helpcenter/inbox.html',
                data: {
                    pageTitle: 'Help Centre'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            files: ['styles/plugins/iCheck/custom.css', 'scripts/plugins/iCheck/icheck.min.js']
                        }]);
                    }
                }
            })
            .state('mailbox.email_compose', {
                url: '/email_compose',
                templateUrl: 'modules/helpcenter/compose.html',
                data: {
                    pageTitle: 'Compose'
                },
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['styles/plugins/summernote/summernote.css','styles/plugins/summernote/summernote-bs3.css','scripts/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['styles/plugins/summernote/summernote.css','styles/plugins/summernote/summernote-bs3.css','scripts/plugins/summernote/summernote.min.js','scripts/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
                }
            });

    }
})();