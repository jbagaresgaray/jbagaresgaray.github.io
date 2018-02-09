(function() {
    'use strict';

    angular.module('starter')
        .controller('subCategoryModalCtrl', subCategoryModalCtrl);

    subCategoryModalCtrl.$inject = ['$scope', '$uibModalInstance'];

    function subCategoryModalCtrl($scope, $uibModalInstance) {

        $scope.save = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();