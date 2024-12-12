/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleClientsRenegocierControleur {
        public static CLASS_NAME: string = "ModaleClientsRenegocierControleur";
        private static logger: MyWay.Services.Loggers.ILogger = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleClientsRenegocierControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.Autres.dataModale
        ];

        // Variables d'entrée
        private clientsARenegocier: Array<Modeles.ApplicationStats.IClientSimplifie>;

        // Variables utiles
        private tableauRaisonsSociales: Modeles.Tableaux.TableauRaisonsSociales;
        private titreModale: string;

        /**
         * Constructeur
         */
        constructor(
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private data: Array<Modeles.ApplicationStats.IClientSimplifie>
        ) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): void {
            ModaleClientsRenegocierControleur.logger.info(">>> Appel de la méthode : ModaleClientsRenegocierControleur.initialiser <<<");

            this.clientsARenegocier = angular.copy(this.data);

            this.tableauRaisonsSociales = new Modeles.Tableaux.TableauRaisonsSociales(false);

            this.titreModale = "Tarifications à renégocier";

            if (this.clientsARenegocier) {
                this.tableauRaisonsSociales.data = this.clientsARenegocier;
            }
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
    app.controller(ModaleClientsRenegocierControleur.CLASS_NAME, ModaleClientsRenegocierControleur);
}
