(function () {
    'use strict';

    angular.module('thjModal').factory('thjModalService', ['$uibModal', '$q',
        function ($uibModal, $q) {
            var that = this;

            var publicMethods = {
                open: open,
                openSmall: openSmall,
                close: close,
                setResult: setResult,
                getModal: getModal
            };

            var modals = [];
            var modalIndex = -1;

            function openSmall(template, data) {
                return open(template, data, 'sm');
            }

            function open(template, data, size) {
                var id = ++modalIndex;

                var modal = $uibModal.open({
                    template: template,
                    size: size ? size : 'md',
                    backdropClass: 'striped-backdrop',
                    backdrop: 'static',
                    animation: true
                });

                var resultDeferred = $q.defer();

                modals[id] = {
                    modal: modal,
                    data: _.cloneDeep(data),
                    resultDeferred: resultDeferred
                };

                return resultDeferred.promise;
            }

            // gets the modal by id or the last added modal if the id is not set
            function getModal(id) {
                var index = id ? id : modalIndex;

                return {
                    data: modals[index].data,
                    setResult: function (result) {
                        setResult(index, result);
                    },
                    close: function () {
                        close(index);
                    },
                    closeWithResult: function (result) {
                        setResult(index, result);
                        close(index);
                    },
                    closeWithFailure: function (error) {
                        setFailure(index, error);
                        close(index);
                    }
                }
            }

            function setResult(id, result) {
                return modals[id].resultDeferred.resolve(result);
            }

            function setFailure(id, error) {
                return modals[id].resultDeferred.reject(error);
            }

            function close(id) {
                modals[id].modal.close();
                modals[id] = undefined;
            }

            return publicMethods;
        }]
    );
})();