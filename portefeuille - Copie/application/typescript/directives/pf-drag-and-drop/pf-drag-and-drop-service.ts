/**
 * Service applicatif de gestion du drag and drop
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer le choix EDS
     */
    class PfDragAndDropService implements IPfDragAndDropService {
        public static CLASS_NAME = "PfDragAndDropService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDragAndDropService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [];

        // Variables utiles
        private donnees: any;

        /**
         * Constructeur
         */
        constructor() { }

        /**
         * Methode permetant de récupérer les données du drag and drop
         * @return {any}
         */
        public getDonnees(): any {
            return this.donnees;
        }

        /**
         * Methode permetant de modifier les données du drag and drop
         * @param {any} donnees
         * @return {void}
         */
        public setDonnees(donnees: any): void {
            this.donnees = donnees;
        }
    }

    /**
     * Interface de la classe PfDragAndDropService
     */
    export interface IPfDragAndDropService {
        getDonnees(): any;
        setDonnees(donnees: any): void;
    }

    // Déclaration du service
    app.service("PfDragAndDropService", PfDragAndDropService);
}  