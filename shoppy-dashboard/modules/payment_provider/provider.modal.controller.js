(function() {
    'use strict';

    angular.module('starter')
        .controller('paymentProviderModalCtrl', paymentProviderModalCtrl);

    paymentProviderModalCtrl.$inject = ['$scope', '$uibModalInstance'];

    function paymentProviderModalCtrl($scope, $uibModalInstance) {

        $scope.save = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();