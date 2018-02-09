(function() {
    'use strict';

    angular.module('starter')
        .config(config);

    config.$inject = ['$stateProvider','isPRODUCTION'];

    function config($stateProvider,isPRODUCTION) {
        $stateProvider
            .state('app.newsletter', {
                url: '/newsletter',
                templateUrl: 'modules/newsletter/newsletter.html',
                data: {
                    pageTitle: 'Newsletter'
                },
                controller: 'newsLetterCtrl'
            })
            .state('app.articles', {
                url: '/articles',
                templateUrl: 'modules/newsletter/article.html',
                data: {
                    pageTitle: 'Articles'
                },
                controller: 'newsLetterCtrl'
            })
            .state('app.composenews', {
                url: '/newsletter/compose',
                templateUrl: 'modules/newsletter/compose.html',
                data: {
                    pageTitle: 'Compose Newsletter'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            files: isPRODUCTION ? 'js/main.min.js' : ['styles/plugins/summernote/summernote.css', 'styles/plugins/summernote/summernote-bs3.css', 'scripts/plugins/summernote/summernote.min.js']
                        }, {
                            name: 'summernote',
                            files: isPRODUCTION ? 'js/main.min.js' : ['styles/plugins/summernote/summernote.css', 'styles/plugins/summernote/summernote-bs3.css', 'scripts/plugins/summernote/summernote.min.js', 'scripts/plugins/summernote/angular-summernote.min.js']
                        }]);
                    }
                }
            });

    }
})();