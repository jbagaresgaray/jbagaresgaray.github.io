(function() {
    'use strict';

    angular.module('starter')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('app.activitystream', {
                url: '/activitystream',
                templateUrl: 'modules/activity_stream/activitystream.html',
                data: { pageTitle: 'Activity Stream' },
                controller:'activityStreamCtrl'
            });

    }
})();