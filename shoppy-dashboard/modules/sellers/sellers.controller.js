(function() {
    'use strict';

    angular.module('starter')
        .controller('sellerCtrl', sellerCtrl);

    sellerCtrl.$inject = ['$scope', '$uibModal'];

    function sellerCtrl($scope, $uibModal) {

        $scope.addSeller = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modules/seller/seller.modal.html',
                controller: 'sellerModalCtrl',
                size: 'md',
            });

            modalInstance.result.then(function() {
                
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };
    }
})();