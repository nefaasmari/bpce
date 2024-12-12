/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-diagramme-grande-barre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    export interface IConfigDiagrammeGrandeBarre {
        intitule: string;
        couleur: COULEUR_GRANDE_BARRE;
        valeur: number;
        listeValeurs: Array<number>;
    }

    export enum COULEUR_GRANDE_BARRE {
        VIOLET_NIV1 = <any>"#D955AC",
        VIOLET_NIV2 = <any>"#B84F6B",
        VIOLET_NIV3 = <any>"#66334A"
    };

    /**
     * Classe du controleur
     */
    export class PfDiagrammeGrandeBarreControleur {
        public static CLASS_NAME = "PfDiagrammeGrandeBarreControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfDiagrammeGrandeBarreControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$element,
        ];

        // Variables d'entrées
        public config: IConfigDiagrammeGrandeBarre;
        public listeConfig: Array<IConfigDiagrammeGrandeBarre>;

        // Variables utiles
        private valeurMax: number;
        public pourcentage: number;

        /**
         * Constructeur
         */
        constructor(
            private $element: ng.IAugmentedJQuery) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfDiagrammeGrandeBarreControleur.logger.info(">>> Appel de la méthode : PfDiagrammeGrandeBarreControleur.initialiser <<<");

            this.valeurMax = this.recupererValeurMax();
            this.pourcentage = this.calculerRapportValeur();
        }

        /**
         * Méthode permettant de récupérer la plus grande valeur
         * @returns {void}
         */
        private recupererValeurMax(): number {
            return Math.max(...<Array<number>>_.pluck<IConfigDiagrammeGrandeBarre>(this.listeConfig, "valeur"));
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
    app.controller("PfDiagrammeGrandeBarreControleur", PfDiagrammeGrandeBarreControleur);
} 