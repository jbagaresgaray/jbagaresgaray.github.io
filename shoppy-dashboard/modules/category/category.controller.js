(function() {
    'use strict';

    angular.module('starter')
        .controller('categoryCtrl', categoryCtrl);

    categoryCtrl.$inject = ['$scope', '$uibModal'];

    function categoryCtrl($scope, $uibModal) {

        $scope.addCategory = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modules/category/category.modal.html',
                controller: 'categoryModalCtrl',
                size: 'md',
            });

            modalInstance.result.then(function() {
                
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.addSubCategory = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modules/category/subcategory/subcategory.modal.html',
                controller: 'subCategoryModalCtrl',
                size: 'md',
            });

            modalInstance.result.then(function() {
                
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };
    }
})();