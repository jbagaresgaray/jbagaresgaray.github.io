(function() {
    'use strict';

    angular.module('starter')
        .config(config);

    config.$inject = ['$stateProvider','isPRODUCTION'];

    function config($stateProvider,isPRODUCTION) {
        $stateProvider
            .state('app.paymentprovider', {
                url: '/paymentprovider',
                templateUrl: 'modules/payment_provider/provider.html',
                data: {
                    pageTitle: 'Payment Provider'
                },
                controller: 'paymentProviderCtrl',
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
            });

    }
})();