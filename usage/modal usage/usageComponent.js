(function () {
    'use strict';

    angular.module('thjTestApp')
        .controller('usageController', ['cnModalService', usageController])
        .component('usage', {
            templateUrl: 'angular_app/usage.html',
            controller: 'usageController',
            controllerAs: 'vm'
        });

    function usageController(cnModalService) {
        var vm = this;

        vm.cancelClicked = function () {
            var cancelModal = cnModalService.openSmall('<thj-cancel-order-modal />', vm.deal);

            cancelModal.then(function (cancelOrderResult) {
                modal.close();
            });
        };
    };
})();