(function() {
    'use strict';

    angular.module('starter')
        .controller('banksCtrl', banksCtrl);

    banksCtrl.$inject = ['$scope', '$uibModal'];

    function banksCtrl($scope, $uibModal) {

        $scope.addBrand = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modules/banks/banks.modal.html',
                controller: 'banksModalCtrl',
                size: 'md',
            });

            modalInstance.result.then(function() {
                
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };
    }
})();