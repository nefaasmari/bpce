/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-panel-niveau-2
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export interface IConfigBoutonPanelNiv2 {
        label: string;
        action: Function;
    }

    /**
     * Classe du controleur
     */
    export class PfPanelNiveau2Controleur {
        public static CLASS_NAME = "PfPanelNiveau2Controleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfPanelNiveau2Controleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public configBouton: IConfigBoutonPanelNiv2;

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
            PfPanelNiveau2Controleur.logger.info(">>> Appel de la méthode : PfPanelNiveau2Controleur.initialiser <<<");
        }
    }

    // Déclaration du controleur
    app.controller("PfPanelNiveau2Controleur", PfPanelNiveau2Controleur);
} 