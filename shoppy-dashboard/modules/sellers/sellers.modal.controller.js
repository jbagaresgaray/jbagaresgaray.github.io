(function() {
    'use strict';

    angular.module('starter')
        .controller('sellerModalCtrl', sellerModalCtrl);

    sellerModalCtrl.$inject = ['$scope', '$uibModalInstance'];

    function sellerModalCtrl($scope, $uibModalInstance) {

        $scope.save = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();