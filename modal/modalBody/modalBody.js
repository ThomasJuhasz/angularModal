(function () {
    'use strict';

    angular.module('thjModal')
        .component('thjModalBody', {
            templateUrl: 'angular_app/shared/modals/modal/modalBody/modalBody.html',
            controllerAs: 'vm',
            transclude: true
        });
})();