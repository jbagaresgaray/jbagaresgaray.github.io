(function() {
    'use strict';

    angular.module('starter')
        .controller('paymentProviderCtrl', paymentProviderCtrl);

    paymentProviderCtrl.$inject = ['$scope', '$uibModal'];

    function paymentProviderCtrl($scope, $uibModal) {

        $scope.addProvider = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modules/payment_provider/provider.modal.html',
                controller: 'paymentProviderModalCtrl',
                size: 'md',
            });

            modalInstance.result.then(function() {
                
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };
    }
})();