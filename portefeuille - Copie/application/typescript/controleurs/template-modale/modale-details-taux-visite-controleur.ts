/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleDetailsTauxVisiteControleur {
        public static CLASS_NAME: string = "ModaleDetailsTauxVisiteControleur";
        private static logger: MyWay.Services.Loggers.ILogger =
            MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleDetailsTauxVisiteControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.MyWay.data
        ];

        //
        private titreModale: string;
        public configDiagrammePourcentageTauxVisite: Array<Services.LibrairieD3.IConfigPourcentageD3>;


        public pourcentageTauxTotal: number;
        public configIndicateurPourcentage: Services.LibrairieD3.IConfigPourcentageD3;

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
            ModaleDetailsTauxVisiteControleur.logger.info(">>> Appel de la méthode : ModaleDetailsPortefeuilleControleur.initialiser <<<");

            this.titreModale = "Taux de visites (Relations économiques)";
            this.creerConfigDiagrammePourcentageDetailTauxVisiteParSuviPar(this.data);

            //Chargement de la la liste détail
        }

        /**
         * 
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammePourcentageDetailTauxVisiteParSuviPar(statsDetailPtf: Modeles.ApplicationStats.IDetailPtf): void {
            this.configDiagrammePourcentageTauxVisite = [];
            let index = 0;
            statsDetailPtf.detailParSuviPar.forEach((parSuiviPar: Modeles.ApplicationStats.IDetailPtfParSuviPar) => {
                this.configDiagrammePourcentageTauxVisite.push(<Services.LibrairieD3.IConfigPourcentageD3>{
                    titre: "",
                    id: "pourcentage-clients-visite" + index,
                    degrade: Services.LibrairieD3.DEGRADE_POURCENTAGE.BLEU,
                    pourcentageUn: parSuiviPar.tauxDeVisite,
                    nombreUn: parSuiviPar.tauxDeVisite,
                    legende: parSuiviPar.nomSuiviPar
                });
                index = index + 1;
            });
            this.pourcentageTauxTotal = this.data.tauxDeVisiteTotal;
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
    app.controller(ModaleDetailsTauxVisiteControleur.CLASS_NAME, ModaleDetailsTauxVisiteControleur);
}