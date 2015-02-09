(function () {
    "use strict";

    angular
        .module('psfApp')
        .factory('RegistryService', RegistryService);

    RegistryService.$inject = ['Restangular', 'Logger'];

    /* @ngInject */
    function RegistryService(Restangular, Logger) {

        var logger = Logger.getInstance('RegistryService');
        var service = Restangular.service('registries');

        return {
            getRegistries: getRegistries
        };

        //////////////////////


        /**
         * Get the list of all the registries
         * @returns the complete array of registries (promise){*}
         */
        function getRegistries() {
            logger.debug('call the /registries service');
            return service
                .getList()
                .then(function(data) {
                    return data;
                })
                .catch(function(error) {
                    logger.error('registries',"Error lors de l'appel du service REST Registry",error);
                    throw error;
                })
        }

        /**
         * Get a registry from an id
         * @returns the registry corresponding (promise){*}
         */
        function getRegistries(id) {
            logger.debug('call the /registries service');
            return service.one(id)
                .get()
                .then(function(data) {
                    return data;
                })
                .catch(function(error) {
                    logger.error('registries/:id',"Error lors de l'appel du service REST Registry",error);
                    throw error;
                })
        }

    }

})();