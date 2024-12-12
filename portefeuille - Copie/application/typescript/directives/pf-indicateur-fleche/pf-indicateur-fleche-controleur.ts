/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-indicateur-fleche
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export enum COULEUR_INDICATEUR_FLECHE {
        VERT = <any>"couleur-verte",
        ORANGE = <any>"couleur-orange",
        ROUGE = <any>"couleur-rouge"
    };

    export enum ICONE_INDICATEUR_FLECHE {
        HAUT = <any>"itce-arrow-up-circle",
        BAS = <any>"itce-arrow-down-circle",
        DROITE = <any>"itce-arrow-right-circle"
    };

    /**
     * Classe du controleur
     */
    export class PfIndicateurFlecheControleur {
        public static CLASS_NAME = "PfIndicateurFlecheControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfIndicateurFlecheControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public config: Modeles.Application.IConfigIndicateurFleche;

        // Variables utiles
        public valeurFormate: string;
        public couleur: string;
        public icone: string;

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
            PfIndicateurFlecheControleur.logger.info(">>> Appel de la méthode : PfIndicateurFlecheControleur.initialiser <<<");
        }

        /**
         * 
         */
        public get isPositif(): boolean {
            return this.config.icone === "itce-arrow-up-circle";
        }
        /**
         * 
         */
        public get isNeutre(): boolean {
            return this.config.icone === "itce-arrow-right-circle";
        }
        /**
         * 
         */
        public get isNegatif(): boolean {
            return this.config.icone === "itce-arrow-down-circle";
        }
    }

    // Déclaration du controleur
    app.controller("PfIndicateurFlecheControleur", PfIndicateurFlecheControleur);
} 