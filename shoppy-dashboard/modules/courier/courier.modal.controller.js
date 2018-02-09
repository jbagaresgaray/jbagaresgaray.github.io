(function() {
    'use strict';

    angular.module('starter')
        .controller('courierModalCtrl', courierModalCtrl);

    courierModalCtrl.$inject = ['$scope', '$uibModalInstance'];

    function courierModalCtrl($scope, $uibModalInstance) {

        $scope.save = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();