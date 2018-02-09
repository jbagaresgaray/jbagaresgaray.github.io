(function() {
    'use strict';

    angular.module('starter')
        .controller('newsLetterCtrl', newsLetterCtrl);

    newsLetterCtrl.$inject = ['$scope', '$state'];

    function newsLetterCtrl($scope, $state) {

        $scope.composeNewsletter = function() {
            $state.go('app.composenews');
        };
    }
})();