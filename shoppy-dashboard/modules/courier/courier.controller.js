(function() {
    'use strict';

    angular.module('starter')
        .controller('courierCtrl', courierCtrl);

    courierCtrl.$inject = ['$scope', '$uibModal'];

    function courierCtrl($scope, $uibModal) {

        $scope.addCourier = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modules/courier/courier.modal.html',
                controller: 'courierModalCtrl',
                size: 'md',
            });

            modalInstance.result.then(function() {
                
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };
    }
})();