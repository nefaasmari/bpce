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
    export class PfDiagrammeColonneControleur {
        public static CLASS_NAME = "PfDiagrammeColonneControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDiagrammeColonneControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
        ];

        // Variables d'entrées
        public svgId: string;
        public config: Array<Modeles.Application.IDataIndicateurColonne>;
        public typeDiagramme: number;

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
            PfDiagrammeColonneControleur.logger.info(">>> Appel de la méthode : PfDiagrammeColonneControleur.initialiser <<<");
            if (!this.typeDiagramme) {
                this.typeDiagramme = 0;
            }

        }
    }

    // Déclaration du controleur
    app.controller("PfDiagrammeColonneControleur", PfDiagrammeColonneControleur);
} 