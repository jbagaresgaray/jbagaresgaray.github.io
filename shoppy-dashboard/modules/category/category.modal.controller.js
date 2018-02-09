(function() {
    'use strict';

    angular.module('starter')
        .controller('categoryModalCtrl', categoryModalCtrl);

    categoryModalCtrl.$inject = ['$scope', '$uibModalInstance'];

    function categoryModalCtrl($scope, $uibModalInstance) {

        $scope.save = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();