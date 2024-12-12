/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleDetailsFluxDebiteurControleur {
        public static CLASS_NAME: string = "ModaleDetailsFluxDebiteurControleur";
        private static logger: MyWay.Services.Loggers.ILogger =
            MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleDetailsFluxDebiteurControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.MyWay.data,
            Constantes.Inject.Services.indicateurFlecheService
        ];

        private titreModale: string;
        public configDiagrammeColonneFluxDebiteur: Array<Modeles.Application.IDataIndicateurMutliColonne>;

        public legendeColonne1: string;
        public couleurColonne1: Modeles.Application.COULEUR_GRANDE_COLONNE;
        public legendeColonne2: string;
        public couleurColonne2: Modeles.Application.COULEUR_GRANDE_COLONNE;
        public configTendenceFluxDebiteurTotal: Modeles.Application.IConfigIndicateurFleche;
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
            ModaleDetailsFluxDebiteurControleur.logger.info(">>> Appel de la méthode : ModaleDetailsFluxDebiteurControleur.initialiser <<<");

            this.titreModale = "Flux commerciaux débiteurs";
            this.creerConfigDiagrammeColonneDetailPtfParSuviPar(this.data);
        }

        /**
         * 
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammeColonneDetailPtfParSuviPar(statsDetailPtf: Modeles.ApplicationStats.IDetailPtf): void {
            let configDiagrammeColonnePnbParAgent: Modeles.Application.IDataIndicateurMutliColonne;
            let index = 0;

            this.configDiagrammeColonneFluxDebiteur = [];

            //récupère l'ensemble des PNB et identifie le plus gros
            let valeurMax: number = Math.max(
                ..._.pluck(statsDetailPtf.detailParSuviPar, "fluxDebiteursNMoins1").
                    concat(..._.pluck(statsDetailPtf.detailParSuviPar, "fluxDebiteursAnneeN")));

            statsDetailPtf.detailParSuviPar.forEach((parSuiviPar: Modeles.ApplicationStats.IDetailPtfParSuviPar) => {
                configDiagrammeColonnePnbParAgent = <Modeles.Application.IDataIndicateurMutliColonne>{};
                configDiagrammeColonnePnbParAgent.dataIndicateurMutliColonne = [];

                configDiagrammeColonnePnbParAgent.dataIndicateurMutliColonne.push(<Modeles.Application.IDataIndicateurColonne>{
                    id: "colonne-flux-debit-" + index,
                    intitule: "",
                    valeur: parSuiviPar.fluxDebiteursNMoins1,
                    couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE2,
                    hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, parSuiviPar.fluxDebiteursNMoins1),
                    estMontant: true
                });
                index = index + 1;

                configDiagrammeColonnePnbParAgent.dataIndicateurMutliColonne.push(<Modeles.Application.IDataIndicateurColonne>{
                    id: "colonne-flux-debit-" + index,
                    intitule: "",
                    valeur: parSuiviPar.fluxDebiteursAnneeN,
                    couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE1,
                    hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, parSuiviPar.fluxDebiteursAnneeN),
                    estMontant: true
                });
                index = index + 1;

                configDiagrammeColonnePnbParAgent.id = "pnb-detail-agent-" + index;
                configDiagrammeColonnePnbParAgent.intitule = parSuiviPar.nomSuiviPar;
                configDiagrammeColonnePnbParAgent.tendence = this.indicateurFlecheService.getConfigIndicateurFleche(parSuiviPar.tauxEvolutionFluxDebiteurs);
                this.configDiagrammeColonneFluxDebiteur.push(configDiagrammeColonnePnbParAgent);
            });


            this.legendeColonne1 =
                `${moment(statsDetailPtf.dateDebFluxAnneeNMoins1).format("MM/YYYY")} à ` +
                `${moment(statsDetailPtf.dateFinFluxAnneeNMoins1).format("MM/YYYY")}`;
            this.couleurColonne1 = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE2;
            this.legendeColonne2 =
                `${moment(statsDetailPtf.dateDebFluxAnneeN).format("MM/YYYY")} à ` +
                `${moment(statsDetailPtf.dateFinFluxAnneeN).format("MM/YYYY")}`;
            this.couleurColonne2 = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE1;
            this.configTendenceFluxDebiteurTotal = this.indicateurFlecheService.getConfigIndicateurFleche(statsDetailPtf.tauxEvolutionFluxDebiteurs);
        }

        /**
         * 
         */
        public get libelle1Total(): string {
            return `Total flux débiteurs N-1 : ${Services.Utils.DataUtils.formaterMontantkiloText(this.data.fluxDebiteursNMoins1)}`;
        }

        /**
         * 
         */
        public get libelle2Total(): string {
            return `Total flux débiteurs N : ${Services.Utils.DataUtils.formaterMontantkiloText(this.data.fluxDebiteursAnneeN)}`;
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
    app.controller(ModaleDetailsFluxDebiteurControleur.CLASS_NAME, ModaleDetailsFluxDebiteurControleur);
}
