/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-tuile-catalogue
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfTuileCatalogueControleur {
        public static CLASS_NAME = "PfTuileCatalogueControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfTuileCatalogueControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$element,
            Constantes.Inject.Services.modalePaniersService
        ];

        // Variables d'entrées
        public tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings;
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
            private $element: ng.IAugmentedJQuery,
            private modalePaniersService: Services.Application.IModalePaniersService) {

            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            PfTuileCatalogueControleur.logger.info(">>> Appel de la méthode : PfTuileCatalogueControleur.initialiser <<<");

            // Initialisation configuration tuile
            this.configTuile = this.getConfigTuile();

            // Initialisation dragSettings
            this.tuileCatalogueSettings.dragSettings = this.modalePaniersService.creerDragSettings(this.tuileCatalogueSettings);
            //this.tuileCatalogueSettings.dragSettings.estActiver = true;
            this.tuileCatalogueSettings.dragSettings.estActiver = this.modalePaniersService.getEstEditionPanier();
            if (this.tuileCatalogueSettings.indicateur.choisi) {
                this.tuileCatalogueSettings.dragSettings.estActiver = false;
            } else if (this.listeTuilePanierSettings.length === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
                this.tuileCatalogueSettings.dragSettings.estActiver = false;
            }

            // Ajout des fonctions des événements drag
            this.tuileCatalogueSettings.dragSettings.dragStartBeforeEvent = this.dragStartBeforeEvent;
            this.tuileCatalogueSettings.dragSettings.dragEndBeforeEvent = this.dragEndBeforeEvent;

            this.$element.ready(this.modalePaniersService.rendreCompatibleTuilesAvecDragAndDrop); 
        }

        /**
         * Variable contenant la méthode a appelé avant que le dragStart commence
         */
        private dragStartBeforeEvent = () => {
            this.modalePaniersService.activerDropPanier();
            this.modalePaniersService.activerDropTuilesPanier(this.listeTuilePanierSettings);

            if (this.listeTuilePanierSettings.length === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX - 1) {
                this.modalePaniersService.cacherBoutonValider();
            }
        };
         
        /**
         * Variable contenant la méthode a appelé avant que le dragEnd commence
         */
        private dragEndBeforeEvent = () => {
            this.modalePaniersService.desactiverDropPanier();
            this.modalePaniersService.desactiverDropTuilesPanier(this.listeTuilePanierSettings);

            if (this.listeTuilePanierSettings.length === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX - 1) {
                this.modalePaniersService.afficherBoutonValider();
            }
        };

        /**
         * Récupération de la configuration de la tuile
         */
        public getConfigTuile(): MyWay.UI.iMwConfigTuile {
            let config: MyWay.UI.iMwConfigTuile = <MyWay.UI.iMwConfigTuile>{};
            config.taille = Constantes.ModalePaniers.TUILE_CATALOGUE_TAILLE;
            config.typeMarquage = Constantes.ModalePaniers.TUILE_TYPE_MARQUAGE_TEXTE;
            if (!this.tuileCatalogueSettings.indicateur.indicateur.estUniquementVueClients) {
                config.typeMarquage = Constantes.ModalePaniers.TUILE_CATALOGUE_TYPE_MARQUAGE_AUCUN;
                this.tuileCatalogueSettings.indicateur.indicateur.intitule = this.modifIntitule(this.tuileCatalogueSettings.indicateur.indicateur.intitule);
            }
            return config;
        }

        // la 1ere fois, on ajoute un mot "composé de blancs insécables" et d'un blanc
        // moyen détourné d'aller à la ligne
        // car on est dans un composant myway : mw-tuile-standard...
        // aller à la ligne permet de rester aligner avec les tuiles où il y a un TAG...(CLIENT/PROSPECT)
        public modifIntitule(texte: string): string {
            let ligneVide: string = _.padLeft("", 40, String.fromCharCode(160));
            if (texte.indexOf(ligneVide) === -1) {
                texte = ligneVide + " " + texte;
            }
            return texte;
        }

        /**
         * Méthode permettant de gérer l'affichage ou non du marquage de la tuile
         * @returns {boolean}
         */
        public afficherMarquage(): boolean {
            if (this.tuileCatalogueSettings.indicateur.choisi) {
                return true;
            } else if (this.tuileCatalogueSettings.indicateur.indicateur.estUniquementVueClients) {
                return true;
            } else {
                return true;
            }
        }

        /**
         * Méthode permettant de gérer le nom du marquage de la tuile
         * @returns {string}
         */
        public nomMarquage(): string {
            if (this.tuileCatalogueSettings.indicateur.indicateur.estUniquementVueClients) {
                return Constantes.ModalePaniers.TUILE_NOM_MARQUAGE_CLIENT_PROSPECT;
            } else {
                return undefined;
            }
        }

        /**
         * Méthode permettant de gérer la couleur de la tuile
         * @returns {string}
         */
        public couleur(): string {
            if (this.tuileCatalogueSettings.indicateur.choisi) {
                return Constantes.ModalePaniers.TUILE_COULEUR_JAUNE;
            } else if (this.tuileCatalogueSettings.indicateur.indicateur.estUniquementVueClients) {
                return Constantes.ModalePaniers.TUILE_COULEUR_ROUGE;
            } else {
                return Constantes.ModalePaniers.TUILE_COULEUR_SOMBRE; 
            }
        }

        /**
         * Méthode permettant de gérer le click sur le plus d'une tuile
         * @returns {void}
         */
        public ajouter(): void {
            // On cache le bouton ajouter si on ajoute le sixième indicateur
            if (this.listeTuilePanierSettings.length === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX - 1) {
                this.modalePaniersService.cacherBoutonValider();
                
                // Modification des paramètres des tuiles catalogue
                _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                    tuile.estEnEdition = false;
                });
            }

            // Changement de l'état de l'indicateur
            this.tuileCatalogueSettings.indicateur.choisi = true;
            this.tuileCatalogueSettings.estEnEdition = false;
            //this.configTuile.typeMarquage = Constantes.ModalePaniers.TUILE_CATALOGUE_TYPE_MARQUAGE_PICTO;

            // Création de la nouvelle tuile panier
            let tuilePanierSettings = <Modeles.Application.ITuilePanierSettings>{};
            tuilePanierSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
            tuilePanierSettings.indicateur = this.tuileCatalogueSettings.indicateur;
            this.listeTuilePanierSettings.push(tuilePanierSettings);

            // Mise à jour du message d'avertissement de modification de filtre
            this.modalePaniersService.afficherMessageAvertissementFiltre(
                this.listeFiltresRelationEco,
                this.listeFiltresClients,
                _.pluck(this.listeTuilePanierSettings, "indicateur"));

            // Rafraichir listeTuileCatalogueSettings
            this.modalePaniersService.rafraichirListeTuileCatalogueSettings();
        }

        /**
         * Méthode permettant de savoir si l'indicateur est uniquement client et choisi
         * @returns {boolean}
         */
        public estClientEtChoisi(): boolean {
            return this.tuileCatalogueSettings.indicateur.indicateur.estUniquementVueClients && this.tuileCatalogueSettings.indicateur.choisi;
        } 
    }

    // Déclaration du controleur
    app.controller("PfTuileCatalogueControleur", PfTuileCatalogueControleur);
} 