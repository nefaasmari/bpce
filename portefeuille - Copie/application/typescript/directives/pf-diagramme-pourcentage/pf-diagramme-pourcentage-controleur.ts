/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-diagramme-pourcentage
 * @module portefeuille.Controleurs
 * @author S0005355 (Eric ALBERT)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfDiagrammePourcentageControleur {
        public static CLASS_NAME = "PfDiagrammePourcentageControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDiagrammePourcentageControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public config: Array<Services.LibrairieD3.IConfigPourcentageD3>;

        // Variables utiles

        /**
         * Constructeur
         */
        constructor(
        ) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        public initialiser(): void {
            PfDiagrammeColonneControleur.logger.info(">>> Appel de la méthode : PfDiagrammePourcentageControleur.initialiser <<<");
        }
    }

    // Déclaration du controleur
    app.controller("PfDiagrammePourcentageControleur", PfDiagrammePourcentageControleur);
} 