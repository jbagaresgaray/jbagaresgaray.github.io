(function() {
    'use strict';

    angular.module('starter')
        .controller('subCategoryCtrl', subCategoryCtrl);

    subCategoryCtrl.$inject = ['$scope', '$uibModal','$state'];

    function subCategoryCtrl($scope, $uibModal,$state) {

        $scope.goBack = function(){
            $state.go('app.category');
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