/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-diagramme-donut
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export interface IConfigPuceLegende {
        intitule: string;
        couleur: any;
        affichagePuceLegendeActif: boolean;
    }

    /**
     * Classe du controleur
     */
    export class PfPuceLegendeControleur {
        public static CLASS_NAME = "PfPuceLegendeControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfPuceLegendeControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public intitule: string;
        public couleur: string;
        public affichagePuceLegendeActif: boolean;

        // Variables utiles

        /**
         * Constructeur
         */
        constructor() {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfDiagrammeDonutControleur.logger.info(">>> Appel de la méthode : PfPuceLegendeControleur.initialiser <<<");
        }
    }

    // Déclaration du controleur
    app.controller("PfPuceLegendeControleur", PfPuceLegendeControleur);
} 