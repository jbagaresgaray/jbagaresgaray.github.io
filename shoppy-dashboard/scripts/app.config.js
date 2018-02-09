(function() {
    'use strict';

    angular.module('starter')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$ocLazyLoadProvider', 'IdleProvider', 'KeepaliveProvider', 'RestangularProvider', 'API_URL', 'API_VERSION', 'isPRODUCTION'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider, RestangularProvider, API_URL, API_VERSION, isPRODUCTION) {

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
        $locationProvider.hashPrefix('');

        // Configure Idle settings
        IdleProvider.idle(5); // in seconds
        IdleProvider.timeout(120); // in seconds

        $urlRouterProvider.otherwise('/login');

        $ocLazyLoadProvider.config({
            debug: false
        });

        $stateProvider
            .state('dashboards', {
                abstract: true,
                url: '/dashboards',
                templateUrl: 'modules/common/content.html',
            })
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'modules/common/content.html',
            })
            .state('mailbox', {
                abstract: true,
                url: '/mailbox',
                templateUrl: 'modules/common/content.html',
            })
            .state('dashboards.dashboard_1', {
                url: '/dashboard_1',
                templateUrl: 'modules/dashboard_1.html',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'angular-flot',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/flot/jquery.flot.js', 'scripts/plugins/flot/jquery.flot.time.js', 'scripts/plugins/flot/jquery.flot.tooltip.min.js', 'scripts/plugins/flot/jquery.flot.spline.js', 'scripts/plugins/flot/jquery.flot.resize.js', 'scripts/plugins/flot/jquery.flot.pie.js', 'scripts/plugins/flot/curvedLines.js', 'scripts/plugins/flot/angular-flot.js', ]
                        }, {
                            name: 'angles',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/chartJs/angles.js', 'scripts/plugins/chartJs/Chart.min.js']
                        }, {
                            name: 'angular-peity',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/peity/jquery.peity.min.js', 'scripts/plugins/peity/angular-peity.js']
                        }]);
                    }
                }
            })
            .state('dashboards.dashboard_2', {
                url: '/dashboard_2',
                templateUrl: 'modules/dashboard_2.html',
                data: {
                    pageTitle: 'Dashboard 2'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'angular-flot',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/flot/jquery.flot.js', 'scripts/plugins/flot/jquery.flot.time.js', 'scripts/plugins/flot/jquery.flot.tooltip.min.js', 'scripts/plugins/flot/jquery.flot.spline.js', 'scripts/plugins/flot/jquery.flot.resize.js', 'scripts/plugins/flot/jquery.flot.pie.js', 'scripts/plugins/flot/curvedLines.js', 'scripts/plugins/flot/angular-flot.js']
                        }, {
                            serie: true,
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js', 'scripts/plugins/jvectormap/jquery-jvectormap-2.0.2.css']
                        }, {
                            serie: true,
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/jvectormap/jquery-jvectormap-world-mill-en.js']
                        }, {
                            name: 'ui.checkbox',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/bootstrap/angular-bootstrap-checkbox.js']
                        }]);
                    }
                }
            })
            .state('dashboards.dashboard_3', {
                url: '/dashboard_3',
                templateUrl: 'modules/dashboard_3.html',
                data: {
                    pageTitle: 'Dashboard 3'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'angles',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/chartJs/angles.js', 'scripts/plugins/chartJs/Chart.min.js']
                        }, {
                            name: 'angular-peity',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/peity/jquery.peity.min.js', 'scripts/plugins/peity/angular-peity.js']
                        }, {
                            name: 'ui.checkbox',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/bootstrap/angular-bootstrap-checkbox.js']
                        }]);
                    }
                }
            })
            .state('dashboards_top', {
                abstract: true,
                url: '/dashboards_top',
                templateUrl: 'modules/common/content_top_navigation.html',
            })
            .state('dashboards_top.dashboard_4', {
                url: '/dashboard_4',
                templateUrl: 'modules/dashboard_4.html',
                data: {
                    pageTitle: 'Dashboard 4'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'angles',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/chartJs/angles.js', 'scripts/plugins/chartJs/Chart.min.js']
                        }, {
                            name: 'angular-peity',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/peity/jquery.peity.min.js', 'scripts/plugins/peity/angular-peity.js']
                        }, {
                            serie: true,
                            name: 'angular-flot',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/flot/jquery.flot.js', 'scripts/plugins/flot/jquery.flot.time.js', 'scripts/plugins/flot/jquery.flot.tooltip.min.js', 'scripts/plugins/flot/jquery.flot.spline.js', 'scripts/plugins/flot/jquery.flot.resize.js', 'scripts/plugins/flot/jquery.flot.pie.js', 'scripts/plugins/flot/curvedLines.js', 'scripts/plugins/flot/angular-flot.js', ]
                        }]);
                    }
                }
            })
            .state('dashboards.dashboard_4_1', {
                url: '/dashboard_4_1',
                templateUrl: 'modules/dashboard_4_1.html',
                data: {
                    pageTitle: 'Dashboard 4'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'angles',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/chartJs/angles.js', 'scripts/plugins/chartJs/Chart.min.js']
                        }, {
                            name: 'angular-peity',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/peity/jquery.peity.min.js', 'scripts/plugins/peity/angular-peity.js']
                        }, {
                            serie: true,
                            name: 'angular-flot',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/flot/jquery.flot.js', 'scripts/plugins/flot/jquery.flot.time.js', 'scripts/plugins/flot/jquery.flot.tooltip.min.js', 'scripts/plugins/flot/jquery.flot.spline.js', 'scripts/plugins/flot/jquery.flot.resize.js', 'scripts/plugins/flot/jquery.flot.pie.js', 'scripts/plugins/flot/curvedLines.js', 'scripts/plugins/flot/angular-flot.js', ]
                        }]);
                    }
                }
            })
            .state('dashboards.dashboard_5', {
                url: '/dashboard_5',
                templateUrl: 'modules/dashboard_5.html',
                data: {
                    pageTitle: 'Dashboard 5'
                },
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'angular-flot',
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/flot/jquery.flot.js', 'scripts/plugins/flot/jquery.flot.time.js', 'scripts/plugins/flot/jquery.flot.tooltip.min.js', 'scripts/plugins/flot/jquery.flot.spline.js', 'scripts/plugins/flot/jquery.flot.resize.js', 'scripts/plugins/flot/jquery.flot.pie.js', 'scripts/plugins/flot/curvedLines.js', 'scripts/plugins/flot/angular-flot.js', ]
                        }, {
                            files: isPRODUCTION ? 'js/main.min.js' : ['scripts/plugins/sparkline/jquery.sparkline.min.js']
                        }]);
                    }
                }
            })
            .state('layouts', {
                url: '/layouts',
                templateUrl: 'modules/layouts.html',
                data: {
                    pageTitle: 'Layouts'
                },
            });

        RestangularProvider.setBaseUrl(API_URL + API_VERSION);

    }
})();