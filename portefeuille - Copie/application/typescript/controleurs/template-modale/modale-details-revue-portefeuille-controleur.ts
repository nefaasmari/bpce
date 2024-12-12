/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleDetailsRevuePortefeuilleControleur {
        public static CLASS_NAME: string = "ModaleDetailsRevuePortefeuilleControleur";
        private static logger: MyWay.Services.Loggers.ILogger =
            MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleDetailsRevuePortefeuilleControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.MyWay.data
        ];

        //
        private titreModale: string;
        public configDiagrammePourcentageTauxRevue: Array<Services.LibrairieD3.IConfigPourcentageD3>;


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
            ModaleDetailsRevuePortefeuilleControleur.logger.info(">>> Appel de la méthode : ModaleDetailsRevuePortefeuilleControleur.initialiser <<<");

            this.titreModale = "Taux de revues";
            this.creerConfigDiagrammePourcentageDetailTauxRevueParSuviPar(this.data);

            //Chargement de la la liste détail
        }

        /**
         * 
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammePourcentageDetailTauxRevueParSuviPar(statsDetailPtf: Modeles.ApplicationStats.IDetailPtf): void {
            this.configDiagrammePourcentageTauxRevue = [];
            let index = 0;
            statsDetailPtf.detailParSuviPar.forEach((parSuiviPar: Modeles.ApplicationStats.IDetailPtfParSuviPar) => {
                this.configDiagrammePourcentageTauxRevue.push(<Services.LibrairieD3.IConfigPourcentageD3>{
                    titre: "",
                    id: "pourcentage-clients-revue" + index,
                    degrade: Services.LibrairieD3.DEGRADE_POURCENTAGE.BLEU,
                    pourcentageUn: parSuiviPar.tauxDeRevue,
                    nombreUn: parSuiviPar.tauxDeRevue,
                    legende: parSuiviPar.nomSuiviPar
                });
                index = index + 1;
            });
            this.pourcentageTauxTotal = this.data.tauxDeRevueTotal;
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
    app.controller(ModaleDetailsRevuePortefeuilleControleur.CLASS_NAME, ModaleDetailsRevuePortefeuilleControleur);
}
