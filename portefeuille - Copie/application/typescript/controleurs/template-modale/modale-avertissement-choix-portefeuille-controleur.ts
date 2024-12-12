/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur de la modale d'avertissement du choix de portefeuille
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";

    export interface IRetourModaleAvertissement {
        typeForcage: Enum.PageClients.TYPE_FORCAGE;
        nombreBoutonsAffiches: number;
    }

    /**
     * Classe du controleur
     */
    export class ModaleAvertissementChoixPortefeuilleControleur {
        public static CLASS_NAME: string = "ModaleAvertissementChoixPortefeuilleControleur";
        private static logger: MyWay.Services.Loggers.ILogger = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleAvertissementChoixPortefeuilleControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.Services.listeClientsService
        ];

        // Variables d'entrée

        // Variables utiles
        public nbMaxPortefeuilles: number = Constantes.Service.RELATION_COMMERCIALE_NB_MAX_RES;
        public estEnMultiPortefeuille: boolean;
        public estAfficherBtnProspects: boolean;
        public estAfficherBtnClients: boolean;
        public listePortefeuilles: Array<Modeles.Application.IPortefeuille>;
        public listeMessageAction: Array<string>;

        /**
         * Constructeur
         */
        constructor(
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private listeClientsService: Services.Application.IListeClientsService) {

            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): void {
            ModaleAvertissementChoixPortefeuilleControleur.logger.info(">>> Appel de la méthode : ModaleAvertissementChoixPortefeuilleControleur.initialiser <<<");

            this.listePortefeuilles = this.listeClientsService.getListePortefeuillesAvecLimite();
            this.estEnMultiPortefeuille = this.listePortefeuilles.length > 1;
            this.determinerAffichageBtnClientsEtProspects();
            this.determinerMessagesAction();
        }

        /**
         * Permet de déterminer l'affichage ou non des boutons Clients et Prospects
         * @returns {void}
         */
        private determinerAffichageBtnClientsEtProspects(): void {
            let nbTotalClients = 0;
            let nbTotalProspects = 0;
            _.forEach(this.listePortefeuilles, (portefeuille: Modeles.Application.IPortefeuille) => {
                nbTotalClients += portefeuille.nombreTotalClients;
                nbTotalProspects += portefeuille.nombreTotalProspectsTiers;
            });
            this.estAfficherBtnClients = nbTotalClients <= Constantes.Service.RELATION_COMMERCIALE_NB_MAX_RES && nbTotalClients > 0;
            this.estAfficherBtnProspects = nbTotalProspects <= Constantes.Service.RELATION_COMMERCIALE_NB_MAX_RES && nbTotalProspects > 0;
        }

        private determinerMessagesAction(): void {
            this.listeMessageAction = [];

            if (this.estAfficherBtnProspects) {
                this.listeMessageAction.push(`- "Afficher les prospects" : la liste des "Relations économiques" de votre séléction ne sera pas accessible.`);
            }
            if (this.estAfficherBtnClients) {
                this.listeMessageAction.push(`- "Afficher les clients" : la liste des "Relations économiques" de votre séléction ne sera pas accessible.`);
            } 
            if (this.estEnMultiPortefeuille) {
                this.listeMessageAction.push(`- "Nouvelle sélection" : modifier votre sélection de portefeuilles.`);
            } else {
                this.listeMessageAction.push(`- "Afficher" : les indicateurs seront prédéfinis et non modifiables.`);
            }
        }

        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        public fermer(): void {
            this.$modalInstance.dismiss();
        }

        /**
         * Action du bouton "Afficher les clients"
         * @returns {void}
         */
        public afficherClients(): void {
            this.$modalInstance.close(this.setRetourPopup(Enum.PageClients.TYPE_FORCAGE.CLIENTS));
        }

        /**
         * Action du bouton "Afficher les prospects"
         * @returns {void}
         */
        public afficherProspects(): void {
            this.$modalInstance.close(this.setRetourPopup(Enum.PageClients.TYPE_FORCAGE.PROSPECTS));
        }

        /**
         * Action du bouton "Afficher les prospects"
         * @returns {void}
         */
        public afficherTout(): void {
            this.$modalInstance.close(this.setRetourPopup(Enum.PageClients.TYPE_FORCAGE.TOUT));
        }

        /**
         * Action du bouton "Nouvelle sélection"
         * @returns {void}
         */
        public nouvelleSelection(): void {
            this.$modalInstance.close(this.setRetourPopup(Enum.PageClients.TYPE_FORCAGE.SANS));
        }

        private setRetourPopup(typeForcage: Enum.PageClients.TYPE_FORCAGE): IRetourModaleAvertissement {
            let resultat: IRetourModaleAvertissement = <IRetourModaleAvertissement>{};
            let nombreBoutonsAffiches: number;

            resultat.typeForcage = typeForcage;

            switch (typeForcage) {
                case Enum.PageClients.TYPE_FORCAGE.CLIENTS:
                    nombreBoutonsAffiches = 2 + ((this.estAfficherBtnProspects === true) ? 1 : 0); //A minima 2 boutons affichés
                    break;
                case Enum.PageClients.TYPE_FORCAGE.PROSPECTS:
                    nombreBoutonsAffiches = 2 + ((this.estAfficherBtnClients === true) ? 1 : 0); //A minima 2 boutons affichés
                    break;
                case Enum.PageClients.TYPE_FORCAGE.TOUT:
                    nombreBoutonsAffiches = 1 + ((this.estAfficherBtnClients === true) ? 1 : 0) + ((this.estAfficherBtnProspects === true) ? 1 : 0); //A minima 1 bouton affiché
                    break;
                case Enum.PageClients.TYPE_FORCAGE.SANS:
                    nombreBoutonsAffiches = 1 + ((this.estAfficherBtnClients === true) ? 1 : 0) + ((this.estAfficherBtnProspects === true) ? 1 : 0); //A minima 1 bouton affiché
                    break;
                default:
                    nombreBoutonsAffiches = 1;
                    break;
            }

            resultat.nombreBoutonsAffiches = nombreBoutonsAffiches;

            return resultat;
        }
    }

    // Déclaration du controlleur
    app.controller(ModaleAvertissementChoixPortefeuilleControleur.CLASS_NAME, ModaleAvertissementChoixPortefeuilleControleur);
}
