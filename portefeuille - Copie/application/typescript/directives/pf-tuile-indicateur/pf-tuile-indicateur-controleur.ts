/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-tuile-indicateur
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfTuileIndicateurControleur {
        public static CLASS_NAME = "PfTuileIndicateurControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfTuileIndicateurControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [];

        // Variables d'entrées
        public type: Enum.Indicateur.TYPE;
        public intitule: string;
        public valeur: string;
        public valeurNumber: number;
        public isEuro: boolean;
        public icone: string;

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
            PfTuileIndicateurControleur.logger.info(">>> Appel de la méthode : PfTuileIndicateurControleur.initialiser <<<");

            this.isEuro = true;

            // @hack modifie l'intitulé Segm. relationnelle groupe en Seg. rel. groupe
            if (this.intitule === Enum.Indicateur.INTITULE.SEG_RELATIONNELLE_GROUPE.toString()) {
                this.intitule = "Seg. rel. groupe";
            }

            console.log("--> tuile indicateur controleur , intitule : ", this.intitule);
            if (this.intitule === Enum.Indicateur.INTITULE.ENCOURS_BDF.toString()) {
                this.isEuro = false; // pas euro, donc k€ pour le filtre
                console.log("--> encours BDF en k€ ");
            }

        }

        /**
         * Méthode permettant de savoir si valeurNumber est defini
         * utilisé par l'IHM
         * @returns {void}
         */
        public valeurNumberDefini(): boolean {
            return this.valeurNumber !== null && this.valeurNumber !== undefined;
        }

        public isGreen(): boolean {
            return (this.type !== Enum.Indicateur.TYPE.DATE && this.valeurNumber > 0);
        }

        public isOrange(): boolean {
            return (this.type !== Enum.Indicateur.TYPE.DATE && this.valeurNumber === 0);
        }

        public isTypeDate(): boolean {
            return this.type === Enum.Indicateur.TYPE.DATE;
        }

        public isTypeMontant(): boolean {
            return this.valeurNumberDefini() && this.type === Enum.Indicateur.TYPE.MONTANT;
        }

        public isTypeNombre(): boolean {
            return this.valeurNumberDefini() && this.type === Enum.Indicateur.TYPE.NOMBRE;
        }


        public isTypePourcent(): boolean {
            return this.valeurNumberDefini() && this.type === Enum.Indicateur.TYPE.POURCENT;
        }


        public isTypeTexte(): boolean {
            return this.type === Enum.Indicateur.TYPE.TEXTE;
        }

        public isTypeBegacli(): boolean {
            return this.type === Enum.Indicateur.TYPE.BEGACLI;
        }

    }

    // Déclaration du controleur
    app.controller("PfTuileIndicateurControleur", PfTuileIndicateurControleur);
} 