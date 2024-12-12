/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleDetailsPortefeuilleControleur {
        public static CLASS_NAME: string = "ModaleDetailsPortefeuilleControleur";
        private static logger: MyWay.Services.Loggers.ILogger =
            MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleDetailsPortefeuilleControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.MyWay.data
        ];

        private titreModale: string;
        public configDiagrammeColonnePortefeuille: Array<Modeles.Application.IDataIndicateurColonne>;
        public nombreTotalClient: number;
        public nombreTotalDontActif: number;
        public typeDiagramme: number;

        /**
         * Constructeur
         */
        constructor(
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private data: Portefeuille.Modeles.ApplicationStats.IDetailPtf
        ) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): void {
            ModaleDetailsPortefeuilleControleur.logger.info(">>> Appel de la méthode : ModaleDetailsPortefeuilleControleur.initialiser <<<");

            this.titreModale = "Portefeuille(s)";
            this.creerConfigDiagrammeColonneDetailPtfParSuviPar(this.data.detailParSuviPar);
            this.typeDiagramme = 1;
        }

        /**
         * 
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammeColonneDetailPtfParSuviPar(statsDetailPtfParSuviPar: Array<Modeles.ApplicationStats.IDetailPtfParSuviPar>): void {
            this.configDiagrammeColonnePortefeuille = [];

            //récupère l'ensemble clients et identifie le plus gros (on utilise ... pour faire passé un tableau en tableau liste d'élément)
            let valeurMax: number = Math.max(..._.pluck(statsDetailPtfParSuviPar, "nbClientsAvecProduitService"));

            this.nombreTotalClient = _.pluck(statsDetailPtfParSuviPar, "nbClientsAvecProduitService").reduce((a: number, b: number) => {
                return a + b;
            });
            this.nombreTotalDontActif = _.pluck(statsDetailPtfParSuviPar, "nombreClientsActifs").reduce((a: number, b: number) => {
                return a + b;
            });

            statsDetailPtfParSuviPar.forEach((parSuiviPar: Modeles.ApplicationStats.IDetailPtfParSuviPar) => {
                this.configDiagrammeColonnePortefeuille.push(<Modeles.Application.IDataIndicateurColonne>{
                    id: "colonne-clients" + parSuiviPar.nomSuiviPar,
                    intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_CLIENTS,
                    sousIntitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_CLIENTS_ACTIFS,
                    valeur: parSuiviPar.nbClientsAvecProduitService,
                    sousValeur: parSuiviPar.nombreClientsActifs,
                    couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_CLIENT,
                    couleurSousValeur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_ACTIF,
                    hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, Math.abs(parSuiviPar.nbClientsAvecProduitService - parSuiviPar.nombreClientsActifs)),
                    sousHauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, parSuiviPar.nombreClientsActifs),
                    estMontant: false,
                    nomSuiviPar: parSuiviPar.nomSuiviPar
                });
            });
        }

        /**
         * 
         */
        public get libelleTotal(): string {
            return `Total clients : ${this.nombreTotalClient} dont ${this.nombreTotalDontActif} actifs`;
        }
               
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        public fermer(): void {
            this.$modalInstance.dismiss();
        }
    }

    // Déclaration du controlleur
    app.controller(ModaleDetailsPortefeuilleControleur.CLASS_NAME, ModaleDetailsPortefeuilleControleur);
}
