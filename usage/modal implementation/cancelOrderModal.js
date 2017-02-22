(function () {
    'use strict';

    angular.module('thjTestApp')
        .controller('cnCancelOrderModalController', ['orderRepository', 'cnModalService', cnCancelOrderModalController])
        .component('cnCancelOrderModal', {
            templateUrl: 'angular_app/shared/modals/orders/cancelOrderModal/cancelOrderModal.html',
            controller: 'cnCancelOrderModalController',
            controllerAs: 'vm'
        });

    function cnCancelOrderModalController(orderRepository, cnModalService) {
        var vm = this;
        var modal = cnModalService.getModal();

        vm.input = modal.data;

        vm.cancelOrder = function () {
            modal.closeWithResult({ orderCancelled: true });
        };

        vm.closeDialog = function () {
            modal.close();
        };
    };
})();