(function() {
    'use strict';

    angular.module('starter')
        .controller('brandsCtrl', brandsCtrl);

    brandsCtrl.$inject = ['$scope', '$uibModal'];

    function brandsCtrl($scope, $uibModal) {

        $scope.addBrand = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modules/brands/brand.modal.html',
                controller: 'brandsModalCtrl',
                size: 'md',
            });

            modalInstance.result.then(function() {
                
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };
    }
})();