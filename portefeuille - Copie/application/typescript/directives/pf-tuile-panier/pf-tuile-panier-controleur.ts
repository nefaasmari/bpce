/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-tuile-panier
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfTuilePanierControleur {
        public static CLASS_NAME = "PfTuilePanierControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfTuilePanierControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$element,
            Constantes.Inject.Services.modalePaniersService
        ];

        // Variables d'entrées
        public tuilePanierSettings: Modeles.Application.ITuilePanierSettings;
        public listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>;
        public listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>;
        public listeFiltresClients: Array<Modeles.Application.IFiltre>;
        public listeFiltresRelationEco: Array<Modeles.Application.IFiltre>;
        
        // Variables utiles
        public configTuile: MyWay.UI.iMwConfigTuile;

        /**
         * Constructeur
         */
        constructor(
            private $scope: ng.IScope,
            private $element: ng.IAugmentedJQuery,
            private modalePaniersService: Services.Application.IModalePaniersService) {

            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfTuilePanierControleur.logger.info(">>> Appel de la méthode : PfTuilePanierControleur.initialiser <<<");

            this.configTuile = <MyWay.UI.iMwConfigTuile>{};
            //this.configTuile.tuileHandler = null;
            this.configTuile.taille = Constantes.ModalePaniers.TUILE_PANIER_TAILLE;
            this.configTuile.typeMarquage = Constantes.ModalePaniers.TUILE_TYPE_MARQUAGE_TEXTE;
            // si marquage, on a le TAG en haut.
            // si non parquage, on a pas le TAG, mais le texte remonte d'une ligne
            if (!this.tuilePanierSettings.indicateur.indicateur.estUniquementVueClients) {
                this.configTuile.typeMarquage = Constantes.ModalePaniers.TUILE_CATALOGUE_TYPE_MARQUAGE_AUCUN;
            }
            // Initialisation du dragSettings et dropSettings
            this.tuilePanierSettings.dragSettings = this.modalePaniersService.creerDragSettings(this.tuilePanierSettings);
            this.tuilePanierSettings.dropSettings = this.modalePaniersService.creerDropSettings(this.indicateurPanierDeposeEvent);

            // Ajout des fonctions des événements drag
            this.tuilePanierSettings.dragSettings.dragStartBeforeEvent = this.dragStartBeforeEvent;
            this.tuilePanierSettings.dragSettings.dragEndBeforeEvent = this.dragEndBeforeEvent;

            this.$element.ready(this.modalePaniersService.rendreCompatibleTuilesAvecDragAndDrop); 
        } 

        /**
         * Variable contenant la méthode a appelé avant que le dragStart commence
         */
        private dragStartBeforeEvent = () => {
            this.modalePaniersService.desactiverDropPanier(); // on ne peut pas dropper une tuile panier dans le panier global
            //if (!this.tuilePanierSettings.estEnEdition) {
            if (!this.tuilePanierSettings.estEnEdition || this.modalePaniersService.getEstEditionPanier()) {
                this.modalePaniersService.afficherDropPoubelle();
                this.modalePaniersService.activerDropTuilesPanier(this.listeTuilePanierSettings);
            }
        };

        /**
         * Variable contenant la méthode a appelé avant que le dragEnd commence
         */
        private dragEndBeforeEvent = () => {
            this.modalePaniersService.cacherDropPoubelle();
            this.modalePaniersService.desactiverDropTuilesPanier(this.listeTuilePanierSettings);
        };

        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé sur un indicateur du panier
         */
        public indicateurPanierDeposeEvent = (tuileSettings: any) => {

            // On desactive les drops des tuiles du panier
            this.modalePaniersService.desactiverDropTuilesPanier(this.listeTuilePanierSettings);

            if (tuileSettings !== this.tuilePanierSettings) {

                // Récupération de l'index de la tuile de drop
                let indexIndicateurDrop =
                    _.findIndex(this.listeTuilePanierSettings, (tuilePanier: Modeles.Application.ITuilePanierSettings) => {
                    return tuilePanier.indicateur.indicateur.code === this.tuilePanierSettings.indicateur.indicateur.code;
                });

                if (tuileSettings.dropSettings) { // Cas déplacement d'une TuilePanier

                    // Récupération de l'index de la tuile à déplacer
                    let indexIndicateurADeplacer =
                        _.findIndex(this.listeTuilePanierSettings, (tuilePanier: Modeles.Application.ITuilePanierSettings) => {
                        return tuilePanier.indicateur.indicateur.code === tuileSettings.indicateur.indicateur.code;
                    });

                    // Interchangement des tuiles
                    this.listeTuilePanierSettings[indexIndicateurDrop] = tuileSettings;
                    this.listeTuilePanierSettings[indexIndicateurADeplacer] = this.tuilePanierSettings;

                    //this.$scope.$applyAsync(); 
                    this.$scope.$apply(); 

                } else { // Cas ajout d'une TuileCatalogue

                    // Changement de l'état de l'indicateur
                    tuileSettings.indicateur.choisi = true;

                    // Création de la nouvelle tuile panier
                    let tuilePanierSettings = <Modeles.Application.ITuilePanierSettings>{};
                    tuilePanierSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
                    tuilePanierSettings.indicateur = tuileSettings.indicateur;
                    this.listeTuilePanierSettings.splice(indexIndicateurDrop, 0, tuilePanierSettings);

                    // On desactive le drop panier
                    this.modalePaniersService.desactiverDropPanier();

                    // Mise à jour du message d'avertissement de modification de filtre
                    this.modalePaniersService.afficherMessageAvertissementFiltre(
                        this.listeFiltresRelationEco,
                        this.listeFiltresClients,
                        _.pluck(this.listeTuilePanierSettings, "indicateur"));

                    // Desactivation du drag sur les tuiles du catalogue si le nombre d'indicateur max est atteint
                    if (this.listeTuilePanierSettings.length === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
                        _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                            tuile.dragSettings.desactiverDrag();
                        });
                    } 

                    // Rafraichir listeTuileCatalogueSettings
                    this.modalePaniersService.rafraichirListeTuileCatalogueSettings();
                } 
            } 
        };

        /**
         * Méthode permettant de gérer l'affichage ou non du marquage de la tuile
         * @returns {boolean}
         */
        public afficherMarquage(): boolean {
            // poue avoiur la ligne verticale tout le temps, il faut afficher le marquage
            // donc toujours true
            return this.tuilePanierSettings.indicateur.indicateur.estUniquementVueClients ? true : true;
        }

        /**
         * Méthode permettant de gérer le nom du marquage de la tuile
         * @returns {string}
         */
        public nomMarquage(): string {
            return this.tuilePanierSettings.indicateur.indicateur.estUniquementVueClients ?
                Constantes.ModalePaniers.TUILE_NOM_MARQUAGE_CLIENT_PROSPECT :
                Constantes.ModalePaniers.TUILE_NOM_MARQUAGE_VIDE;
        }

        /**
         * Méthode permettant de gérer la couleur de la tuile
         * @returns {string}
         */
        public couleur(): string {
            return this.tuilePanierSettings.indicateur.indicateur.estUniquementVueClients ?
                Constantes.ModalePaniers.TUILE_COULEUR_ROUGE :
                Constantes.ModalePaniers.TUILE_COULEUR_SOMBRE;
        }

        /**
         * Méthode permettant de gérer le click sur la poubelle d'une tuile
         * @returns {void}
         */
        public supprimer(): void {
            this.modalePaniersService.supprimerIndicateurPanier(
                this.tuilePanierSettings,
                this.listeTuileCatalogueSettings,
                this.listeTuilePanierSettings,
                this.listeFiltresClients,
                this.listeFiltresRelationEco);
        }

        /**
         * Méthode permettant de gérer le click sur la flèche gauche d'une tuile
         * @returns {void}
         */
        public deplacerAGauche(): void {
            let oldIndex = this.listeTuilePanierSettings.indexOf(this.tuilePanierSettings);
            let newIndex = oldIndex - 1;
            if (newIndex > -1) {
                let item = this.listeTuilePanierSettings.splice(oldIndex, 1)[0];
                this.listeTuilePanierSettings.splice(newIndex, 0, item);
            }
        }

        /**
         * Méthode permettant de gérer le click sur la flèche droite d'une tuile
         * @returns {void}
         */
        public deplacerADroite(): void {
            let oldIndex = this.listeTuilePanierSettings.indexOf(this.tuilePanierSettings);
            let newIndex = oldIndex + 1;
            if (newIndex < this.listeTuilePanierSettings.length) {
                let item = this.listeTuilePanierSettings.splice(oldIndex, 1)[0];
                this.listeTuilePanierSettings.splice(newIndex, 0, item);
            }
        }

        /**
         * Méthode permettant d'afficher ou non la fléche gauche
         * @returns {boolean}
         */
        public afficherFlecheGauche(): boolean {
            if (this.tuilePanierSettings &&
                this.tuilePanierSettings.estEnEdition &&
                this.listeTuilePanierSettings) {
                return (this.listeTuilePanierSettings.indexOf(this.tuilePanierSettings) === 0) ? false : true;
            } else {
                return false;
            }
        }

        /**
         * Méthode permettant d'afficher ou non la fléche droite
         * @returns {boolean}
         */
        public afficherFlecheDroite(): boolean {
            if (this.tuilePanierSettings &&
                this.tuilePanierSettings.estEnEdition &&
                this.listeTuilePanierSettings) {
                let listeTuile = this.listeTuilePanierSettings;
                return (listeTuile.indexOf(this.tuilePanierSettings) === listeTuile.length - 1) ? false : true;
            } else {
                return false;
            } 
        }

        /**
         * Retour le libelle famille sur de la tuile
         * @return {string} libelle de la famille
         */
        public get famille(): string {
            return String.fromCharCode(160, 160, 160) +
                this.tuilePanierSettings.indicateur.indicateur.famille.toString();
        }
    }

    // Déclaration du controleur
    app.controller("PfTuilePanierControleur", PfTuilePanierControleur);
} 