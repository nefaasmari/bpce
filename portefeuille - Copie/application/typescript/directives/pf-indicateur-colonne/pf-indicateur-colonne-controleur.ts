/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-indicateur-colonne
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfIndicateurColonneControleur {
        public static CLASS_NAME = "PfIndicateurColonneControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfIndicateurColonneControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public data: Modeles.Application.IDataIndicateurColonne;

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
            PfIndicateurColonneControleur.logger.info(">>> Appel de la méthode : PfIndicateurColonneControleur.initialiser <<<");
        }

        /**
         * Sous Valeur visible
         */
        public estVisibleSousValeur(): boolean {
            return this.data.sousValeur !== undefined;
        }

        /**
         * Intitulé Sous Valeur visible
         */
        public estVisibleIntituleSousValeur(): boolean {
            return this.data.sousValeur !== 0;
        }

        /**
         * suivi par visible
         */
        public get estVisibleSuiviPar(): boolean {
            return this.data.nomSuiviPar !== undefined && this.data.nomSuiviPar !== null;
        }

        /**
         * 
         */
        public get estSousValeurEnNombre(): boolean {
            return !this.data.estMontant && this.estVisibleIntituleSousValeur();
        }
    }

    // Déclaration du controleur
    app.controller("PfIndicateurColonneControleur", PfIndicateurColonneControleur);
} 