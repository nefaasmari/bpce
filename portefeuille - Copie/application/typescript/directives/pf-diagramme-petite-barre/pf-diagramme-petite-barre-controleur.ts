/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-diagramme-petite-barre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export interface IConfigDiagrammePetiteBarre {
        intitule: string;
        couleur: COULEUR_PETITE_BARRE;
        valeur: number;
        listeValeurs: Array<number>;
    }

    export enum COULEUR_PETITE_BARRE {
        BLEU_NIV1 = <any>"#76DDFB",
        BLEU_NIV2 = <any>"#53A8E2",
        BLEU_NIV3 = <any>"#CFE3F0"
    };

    /**
     * Classe du controleur
     */
    export class PfDiagrammePetiteBarreControleur {
        public static CLASS_NAME = "PfDiagrammePetiteBarreControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDiagrammePetiteBarreControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public config: IConfigDiagrammePetiteBarre;
        public listeConfig: Array<IConfigDiagrammePetiteBarre>;

        // Variables utiles
        private valeurMax: number;
        public pourcentage: number;

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
            PfDiagrammePetiteBarreControleur.logger.info(">>> Appel de la méthode : PfDiagrammePetiteBarreControleur.initialiser <<<");

            this.valeurMax = this.recupererValeurMax();
            this.pourcentage = this.calculerRapportValeur();
        }

        /**
         * Méthode permettant de récupérer la plus grande valeur
         * @returns {void}
         */
        private recupererValeurMax(): number {
            return Math.max(...<Array<number>>_.pluck<IConfigDiagrammePetiteBarre>(this.listeConfig, "valeur"));
        }

        /**
         * Méthode permettant de calculer le rapport de la valeur
         * @returns {void}
         */
        private calculerRapportValeur(): number {
            return (this.config.valeur * 80) / this.valeurMax;
        }
    }

    // Déclaration du controleur
    app.controller("PfDiagrammePetiteBarreControleur", PfDiagrammePetiteBarreControleur);
} 