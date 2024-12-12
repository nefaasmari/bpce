/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleClientsActiverControleur {
        public static CLASS_NAME: string = "ModaleClientsActiverControleur";
        private static logger: MyWay.Services.Loggers.ILogger = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleClientsActiverControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.Autres.dataModale
        ];

        // Variables d'entrée
        private clientsAActiver: Array<Modeles.ApplicationStats.IClientSimplifie>;

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
            ModaleClientsActiverControleur.logger.info(">>> Appel de la méthode : ModaleClientsActiverControleur.initialiser <<<");

            this.clientsAActiver = angular.copy(this.data);
            
            this.tableauRaisonsSociales = new Modeles.Tableaux.TableauRaisonsSociales(true);

            this.titreModale = "Clients à activer";

            if (this.clientsAActiver) {
                this.tableauRaisonsSociales.data = this.clientsAActiver;
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
    app.controller(ModaleClientsActiverControleur.CLASS_NAME, ModaleClientsActiverControleur);
}
