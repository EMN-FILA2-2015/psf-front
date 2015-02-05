(function() {
    "use strict";

    var english_translation = {
        'MESSAGE' : 'Hello world',
        'REGISTRIES_TITLE' : 'Registries',
        'REGISTRIES_ID' : 'Id',
        'REGISTRIES_NAME' : 'Name',
        'REGISTRIES_TYPE' : 'Type',
        'REGISTRIES_HOST' : 'Host',
        'REGISTRIES_PORT' : 'Port',
        'REGISTRIES_PROTOCOLE' : 'Protocole'
    };

    var french_translation = {
        'MESSAGE' : 'Bonjour le monde',
        'REGISTRIES_TITLE' : 'Registres',
        'REGISTRIES_ID' : 'Id',
        'REGISTRIES_NAME' : 'Nom',
        'REGISTRIES_TYPE' : 'Type',
        'REGISTRIES_HOST' : 'Hôte',
        'REGISTRIES_PORT' : 'Port',
        'REGISTRIES_PROTOCOLE' : 'Protocole'
    };

    angular
        .module('translate', ['pascalprecht.translate'])
        .config(function($translateProvider) {
            $translateProvider.translations('en', english_translation);
            $translateProvider.translations('fr', french_translation);
            $translateProvider.preferredLanguage('fr');
        });


})();