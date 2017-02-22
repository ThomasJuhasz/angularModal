(function () {
    'use strict';

    angular.module('thjModal')
        .controller('thjModalHeaderController', ['thjModalService', thjModalHeaderController])
        .component('thjModalHeader', {
            templateUrl: 'angular_app/shared/modals/modal/modalHeader/modalHeader.html',
            controller: 'thjModalHeaderController',
            controllerAs: 'vm',
            transclude: true
        });

    function thjModalHeaderController(modalService) {
        var vm = this;
        var modal = modalService.getModal();

        vm.close = function () {
            modal.close();
        }
    }
})();