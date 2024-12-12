/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleDetailsRentabilitePNBControleur {
        public static CLASS_NAME: string = "ModaleDetailsRentabilitePNBControleur";
        private static logger: MyWay.Services.Loggers.ILogger =
            MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleDetailsRentabilitePNBControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.MyWay.data,
            Constantes.Inject.Services.indicateurFlecheService
        ];

        private titreModale: string;
        public configDiagrammeColonnePnb: Array<Modeles.Application.IDataIndicateurMutliColonne>;

        public legendeColonne1: string;
        public couleurColonne1: Modeles.Application.COULEUR_GRANDE_COLONNE;
        public legendeColonne2: string; 
        public couleurColonne2: Modeles.Application.COULEUR_GRANDE_COLONNE;
        public configTendencePNBTotal: Modeles.Application.IConfigIndicateurFleche;
        public typeDiagramme: number;

        /**
         * Constructeur
         */
        constructor(
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private data: Portefeuille.Modeles.ApplicationStats.IDetailPtf,
            private indicateurFlecheService: Services.Application.IIndicateurFlecheService) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): void {
            ModaleDetailsRentabilitePNBControleur.logger.info(">>> Appel de la méthode : ModaleDetailsRentabilitePNBControleur.initialiser <<<");

            this.titreModale = "PNB (IPADE)";
            this.creerConfigDiagrammeColonneDetailPtfParSuviPar(this.data);
        }

        /**
         * 
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammeColonneDetailPtfParSuviPar(statsDetailPtf: Modeles.ApplicationStats.IDetailPtf): void {
            let configDiagrammeColonnePnbParAgent: Modeles.Application.IDataIndicateurMutliColonne;
            let index = 0;

            this.configDiagrammeColonnePnb = [];

            //récupère l'ensemble des PNB et identifie le plus gros
            let valeurMax: number = Math.max(
                ..._.pluck(statsDetailPtf.detailParSuviPar, "pnb12DerniersMoisGlissNMoins1").
                concat(..._.pluck(statsDetailPtf.detailParSuviPar, "pnb12DerniersMoisGlissantN")));

            statsDetailPtf.detailParSuviPar.forEach((parSuiviPar: Modeles.ApplicationStats.IDetailPtfParSuviPar) => {
                configDiagrammeColonnePnbParAgent = <Modeles.Application.IDataIndicateurMutliColonne>{};
                configDiagrammeColonnePnbParAgent.dataIndicateurMutliColonne = [];
                
                configDiagrammeColonnePnbParAgent.dataIndicateurMutliColonne.push(<Modeles.Application.IDataIndicateurColonne>{
                    id: "colonne-pnb-" + index,
                    intitule: "",
                    valeur: parSuiviPar.pnb12DerniersMoisGlissNMoins1,
                    couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE2,
                    hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, parSuiviPar.pnb12DerniersMoisGlissNMoins1),
                    estMontant: true
                });
                index = index + 1;

                configDiagrammeColonnePnbParAgent.dataIndicateurMutliColonne.push(<Modeles.Application.IDataIndicateurColonne>{
                    id: "colonne-pnb-" + index,
                    intitule: "",
                    valeur: parSuiviPar.pnb12DerniersMoisGlissantN,
                    couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE1,
                    hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, parSuiviPar.pnb12DerniersMoisGlissantN),
                    estMontant: true
                });
                index = index + 1;

                configDiagrammeColonnePnbParAgent.id = "pnb-detail-agent-" + index;
                configDiagrammeColonnePnbParAgent.intitule = parSuiviPar.nomSuiviPar;
                configDiagrammeColonnePnbParAgent.tendence = this.indicateurFlecheService.getConfigIndicateurFleche(parSuiviPar.tauxEvolutionPnb);
                this.configDiagrammeColonnePnb.push(configDiagrammeColonnePnbParAgent);
            });

            
            this.legendeColonne1 =
                `${moment(statsDetailPtf.dateDebPnb12DerMoisGlissNMoins1).format("DD/MM/YYYY")} à ` +
                `${moment(statsDetailPtf.dateFinPnb12DerMoisGlissNMoins1).format("DD/MM/YYYY")}`;
            this.couleurColonne1 = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE2;
            this.legendeColonne2 =
                `${moment(statsDetailPtf.dateDebPnb12DerMoisGlissN).format("DD/MM/YYYY")} à ` +
                `${moment(statsDetailPtf.dateFinPnb12DerMoisGlissN).format("DD/MM/YYYY")}`;
            this.couleurColonne2 = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE1;
            this.configTendencePNBTotal = this.indicateurFlecheService.getConfigIndicateurFleche(statsDetailPtf.tauxEvolutionPnb);
        }

        /**
         * 
         */
        public get libelle1Total(): string {
            return `Total PNB N-1 : ${Services.Utils.DataUtils.formaterMontantkiloText(this.data.pnb12DerniersMoisGlissNMoins1)}`;
        }

        /**
         * 
         */
        public get libelle2Total(): string {
            return `Total PNB N : ${Services.Utils.DataUtils.formaterMontantkiloText(this.data.pnb12DerniersMoisGlissantN)}`;
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
    app.controller(ModaleDetailsRentabilitePNBControleur.CLASS_NAME, ModaleDetailsRentabilitePNBControleur);
}
