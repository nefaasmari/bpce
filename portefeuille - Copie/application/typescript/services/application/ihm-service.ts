/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de gestion de l'ihm
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer certains choix de l'ihm
     */
    class IhmService implements IIhmService {
        public static CLASS_NAME = "IhmService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(IhmService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.Angular.$q
        ];

        // Variables utiles
        private typeVue: Enum.PageClients.TYPE_VUE;

        /**
         * Constructeur
         */
        constructor(
            private $q: ng.IQService
        ) { }

        public getTypeVue(): Enum.PageClients.TYPE_VUE {
            if (this.typeVue) {
                return this.typeVue;
            } else {
                return Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE;
            }
        }

        public setTypeVue(type: Enum.PageClients.TYPE_VUE): void {
            if (type) {
                this.typeVue = type;
            }
        }
    }

    /**
     * Interface de la classe EventService
     */
    export interface IIhmService {
        getTypeVue(): Enum.PageClients.TYPE_VUE;
        setTypeVue(type: Enum.PageClients.TYPE_VUE): void;
    }

    // Déclaration du service
    app.service(IhmService.CLASS_NAME, IhmService);
}  