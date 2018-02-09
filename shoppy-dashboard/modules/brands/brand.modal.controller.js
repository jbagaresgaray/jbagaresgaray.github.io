(function() {
    'use strict';

    angular.module('starter')
        .controller('brandsModalCtrl', brandsModalCtrl);

    brandsModalCtrl.$inject = ['$scope', '$uibModalInstance'];

    function brandsModalCtrl($scope, $uibModalInstance) {

        $scope.save = function() {
            $uibModalInstance.close();
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();