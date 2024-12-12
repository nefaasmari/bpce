/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-diagramme-colonne
 * @module portefeuille.Controleurs
 * @author S0005410 (Eric Jacquot)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfDiagrammeMultiColonneControleur {
        public static CLASS_NAME = "PfDiagrammeMultiColonneControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDiagrammeMultiColonneControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public config: Array<Modeles.Application.IDataIndicateurMutliColonne>;

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
        public initialiser(): void {
            PfDiagrammeColonneControleur.logger.info(">>> Appel de la méthode : PfDiagrammeMultiColonneControleur.initialiser <<<");
        }
    }

    // Déclaration du controleur
    app.controller("PfDiagrammeMultiColonneControleur", PfDiagrammeMultiColonneControleur);
} 