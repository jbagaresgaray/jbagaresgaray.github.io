(function() {
    'use strict';

    angular.module('starter')
        .controller('banksModalCtrl', banksModalCtrl);

    banksModalCtrl.$inject = ['$scope', '$uibModalInstance'];

    function banksModalCtrl($scope, $uibModalInstance) {

        $scope.save = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();