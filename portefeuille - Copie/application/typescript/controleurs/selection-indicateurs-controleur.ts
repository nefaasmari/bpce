/// <reference path="../constantes/inject-constantes.ts" />

/**
 * Controleur de la page selection indicateurs
 * @module Portefeuille.Controleurs
 * @author S0005354 (JM FOLLETTI)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Controleur de l'index
     */
    export class SelectionIndicateursControleur {
        public static CLASS_NAME = "SelectionIndicateursControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(SelectionIndicateursControleur.CLASS_NAME);

        // Proprietés
        public strFilArianePageActuelle: string;
        public strFilArianePageOrigine: string;
        public listePaniers: Array<Modeles.Application.IPanier>;
        public listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        public panierEnCours: Modeles.Application.IPanier;
        public panierDefaut: Modeles.Application.IPanier;

        public messageErreurNomSelection: string;
        public listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>;
        public listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>;
        public listeCodesIndicateursPanierInit: Array<string>;
        public panierDropSettings: Modeles.Application.IDropSettings;
        public poubelleDropSettings: Modeles.Application.IDropSettings;
        public estAfficherDropPanier: boolean;
        public estEnEditionPanier: boolean;
        public nomFiltre1: string;
        public nomFiltre2: string;
        public nomFiltre3: string;
        public nomFiltre4: string;
        public estDispoAjoutSelection: boolean;
        public chargementEnCours: boolean;
        public erreurSelection: boolean;
        public myForm: ng.IFormController;
        public txtTooltip: string;

        private nomSelTemp: string;
        private estCreationSelection: boolean;

        // Injection de dépendances 
        public static $inject: string[] = [
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Services.ihmService,
            Constantes.Inject.Services.preferencesService,
            Constantes.Inject.Services.indicateurService,
            Constantes.Inject.Services.modalePaniersService,
            Constantes.Inject.Services.listeClientsService,
            Constantes.Inject.Services.filtreService,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.contexteService
        ];

        /**
         * Constructeur
         */
        constructor(
            private $scope: ng.IScope,
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $q: ng.IQService,
            private $location: ng.ILocationService,
            //private $element: ng.IAugmentedJQuery,
            private ihmService: Services.Application.IIhmService,
            private preferencesService: Services.Application.IPreferencesService,
            private indicateurService: Services.Application.IIndicateurService,
            private modalePaniersService: Services.Application.IModalePaniersService,
            private listeClientsService: Services.Application.IListeClientsService,
            private filtreService: Services.Application.IFiltreService, 
            private eventService: Services.Application.IEventService,
            private contexteService: Services.Application.IContexteService
        ) {
            this.txtTooltip = "Le bouton \"Gérer la sélection\" permet de :\n -Ajouter, supprimer et ordonner les indicateurs.\n -Modifier le nom de la sélection.";
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): ng.IPromise<void> {
            SelectionIndicateursControleur.logger.info(">>> Appel de la méthode : SelectionIndicateursControleur.initialiser <<<");
            this.erreurSelection = false;
            this.estDispoAjoutSelection = false;
            this.modalePaniersService.setSelectionIndicateursControleur(this);

            // Fil Ariane
            this.strFilArianePageActuelle = Constantes.Application.FIL_ARIANE_PAGE_SELECTION_INDICATEURS;
            this.strFilArianePageOrigine = this.ihmService.getTypeVue() === Enum.PageClients.TYPE_VUE.VUE_CLIENTS ? "Clients" : "Relations économiques";

            if (!this.estEnEditionPanier) {
                this.estEnEditionPanier = false;
            }

            this.listeTotaleIndicateurs = this.indicateurService.getListeTotaleIndicateursType();
            return this.preferencesService.lirePaniers(this.listeTotaleIndicateurs, true).then((lstPaniers: Array<Modeles.Application.IPanier>) => {
                if (!this.listePaniers) {
                    this.listePaniers = lstPaniers ? lstPaniers : [];
                }
                this.estDispoAjoutSelection = !this.listePaniers || this.listePaniers.length < Constantes.Application.LIMITE_NB_PANIERS;
                if (!this.panierEnCours) { // premier passage dans l'initialisation
                    this.panierEnCours = Services.Utils.ApplicationUtils.recupererPanierDefaut(this.listePaniers);
                    if (!this.panierDefaut) {
                        this.panierDefaut = this.panierEnCours;
                    }
                }
                
                // Creation de listeTuileCatalogueSettings
                this.creationListeCatalogueSettings();

                // Création de listeTuilePanierSettings
                this.creationListePanierSettings();

                //this.listeFiltresClients = this.filtreService.getListeFiltresClients();
                //this.listeFiltresRelationEco = this.filtreService.getListeFiltresRelationsEco();

                // Création des paramètres du drop du panier
                this.panierDropSettings = this.panierDropSettings ? this.panierDropSettings : this.modalePaniersService.creerDropSettings(this.panierDeposeEvent);

                // Création des paramètres du drop de la poubelle
                this.poubelleDropSettings = this.poubelleDropSettings ? this.poubelleDropSettings : this.modalePaniersService.creerDropSettings(this.poubelleDeposeEvent);

                this.setEstActiverDropPanier(this.estEnEditionPanier);
                this.setEstAfficherDropPoubelle(this.estEnEditionPanier);

                // BDRL-1616: si aucune sélection, on passe directement en mode saisie de nouvelle sélection
                if (this.listePaniers.length === 0) {
                    return this.ajouterSelection();
                } else {
                    return this.$q.when();
                }
            });
        }


        /**
         * Méthode permettant de rafraichir listeTuileCatalogueSettings
         * @return {void}
         */
        public rafraichirListeTuileCatalogueSettings(): void {
           
            if (this.estEnEditionPanier) {
                _.forEach(this.listeTuilePanierSettings, (tuile: Modeles.Application.ITuilePanierSettings) => {
                    tuile.estEnEdition = true;
                    //if (!tuile.dragSettings) {
                    //    tuile.dragSettings = this.eventService.getDefautDragSettingsPfCoreDraggableControleur();
                    //}
                });

                _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                    // gestion du nombre max atteint
                    if (this.listeTuilePanierSettings.length >= Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
                        tuile.estEnEdition = false;
                        tuile.dragSettings.desactiverDrag();
                    } else {
                        let indicateurExistant = _.find(this.listeTuilePanierSettings, (tuilePanier: Modeles.Application.ITuilePanierSettings) => {
                            return tuile.indicateur.indicateur.code === tuilePanier.indicateur.indicateur.code;
                        });
                        if (indicateurExistant) {
                            tuile.estEnEdition = false;
                            tuile.indicateur.choisi = true;
                            tuile.dragSettings.desactiverDrag();
                        } else {
                            tuile.estEnEdition = true;
                            tuile.dragSettings.activerDrag();
                        }
                    }
                });
            }
        }

        ///**
        // * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé dans le panier
        // */
        public panierDeposeEvent = (tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings) => {

            // Changement de l'état de l'indicateur
            tuileCatalogueSettings.indicateur.choisi = true;

            // Création de la nouvelle tuile panier
            let tuilePanierSettings = <Modeles.Application.ITuilePanierSettings>{};
            tuilePanierSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
            tuilePanierSettings.indicateur = tuileCatalogueSettings.indicateur;
            this.listeTuilePanierSettings.push(tuilePanierSettings);

            // On desactive les drops du panier
            this.setEstActiverDropPanier(false);
            this.modalePaniersService.desactiverDropTuilesPanier(this.listeTuilePanierSettings);

            // Rafraichir listeTuileCatalogueSettings
            this.rafraichirListeTuileCatalogueSettings();

            // si le nombre d'indicateur max est atteint
            if (this.getNombreIndicateurPanier() === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {

                // Desactivation du drag sur les tuiles du catalogue
                _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                    tuile.dragSettings.desactiverDrag();
                });

                // On cache le bouton ajouter
                //this.setEstAfficherBoutonAjouter(false); 
            }

        //    // Mise à jour du message d'avertissement de modification de filtre
        //    this.modalePaniersService.afficherMessageAvertissementFiltre(
        //        this.listeFiltresRelationEco,
        //        this.listeFiltresClients,
        //        _.pluck(this.listeTuilePanierSettings, "indicateur"));

            this.$scope.$applyAsync();
            //this.$scope.$apply();
        };

        /**
         * Méthode permettant de retourner le nombre d'indicateur présent dans le panier en cours
         * @return {void}
         */
        public getNombreIndicateurPanier(): number {
            return this.listeTuilePanierSettings.length;
        }

        /**
         * Méthode permettant de modifier l'état du drop panier
         * @param {boolean} estAfficher
         * @returns {void}
         */
        public setEstActiverDropPanier(estAfficher: boolean): void {
            if (estAfficher) {
                this.estAfficherDropPanier = true;
                if (this.panierDropSettings.activerDragOver) {
                    this.panierDropSettings.activerDragOver();
                }
            } else {
                this.estAfficherDropPanier = false;
                if (this.panierDropSettings.desactiverDragOver) {
                    this.panierDropSettings.desactiverDragOver();
                }
            }
            this.$scope.$applyAsync();
        }

        /**
         * Méthode permettant de modifier l'état du drop poubelle
         * @param {boolean} estAfficher
         * @returns {void}
         */
        public setEstAfficherDropPoubelle(estAfficher: boolean): void {
            if (estAfficher) {
                if (this.poubelleDropSettings.activerDragOver) {
                    this.poubelleDropSettings.activerDragOver();
                }
            } else {
                if (this.poubelleDropSettings.desactiverDragOver) {
                    this.poubelleDropSettings.desactiverDragOver();
                }
            }
            this.$scope.$applyAsync(); 
        }

        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé dans la poubelle
         */
        public poubelleDeposeEvent = (tuilePanierSettings: Modeles.Application.ITuilePanierSettings) => {

            // Récupération de la tuile catalogue
            let tuileCatalogue = _.find(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                return tuile.indicateur.indicateur.code === tuilePanierSettings.indicateur.indicateur.code;
            });

            tuileCatalogue.estEnEdition = true;

            this.modalePaniersService.supprimerIndicateurPanier(
                tuilePanierSettings,
                this.listeTuileCatalogueSettings,
                this.listeTuilePanierSettings,
                undefined,
                undefined);

            // On cache le drop poubelle
            this.setEstAfficherDropPoubelle(false);

            // On desactive les drops des tuiles du panier
            this.modalePaniersService.desactiverDropTuilesPanier(this.listeTuilePanierSettings);
        };

        private creationListePanierSettings(): void {
            this.listeTuilePanierSettings = [];
            if (this.panierEnCours) {
                _.forEach(this.panierEnCours.listeChoixIndicateurs, (indicateur: Modeles.Application.IIndicateurChoix) => {
                    let tuilePanierSettings = <Modeles.Application.ITuilePanierSettings>{};
                    tuilePanierSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
                    tuilePanierSettings.indicateur = indicateur;
                    tuilePanierSettings.estEnEdition = this.estEnEditionPanier;

                    this.listeTuilePanierSettings.push(tuilePanierSettings);
                });
            }
        }

        private creationListeCatalogueSettings(): void {
            this.listeTuileCatalogueSettings = [];
            _.forEach(this.listeTotaleIndicateurs, (indicateur: Modeles.Application.IIndicateurType) => {

                if (indicateur.estVisibleColonne) {

                    let tuileCatalogueSettings = <Modeles.Application.ITuileCatalogueSettings>{};
                    tuileCatalogueSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
                    tuileCatalogueSettings.estEnEdition = this.estEnEditionPanier && this.panierEnCours.listeChoixIndicateurs.length < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX;

                    // Récupération de l'indicateur
                    let indicateurExistant: Modeles.Application.IIndicateurChoix;
                    if (this.panierEnCours) {
                        indicateurExistant = _.find(this.panierEnCours.listeChoixIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                            return indicateurChoix.indicateur.code === indicateur.code;
                        });
                    }

                    if (indicateurExistant) {
                        tuileCatalogueSettings.indicateur = indicateurExistant;
                        tuileCatalogueSettings.estEnEdition = false;
                    } else {
                        let indicateurCatalogue = <Modeles.Application.IIndicateurChoix>{};
                        indicateurCatalogue.indicateur = indicateur;
                        indicateurCatalogue.choisi = false;
                        tuileCatalogueSettings.indicateur = indicateurCatalogue;
                    }

                    this.listeTuileCatalogueSettings.push(tuileCatalogueSettings);
                }
            });
        }

        /**
         * Methode qui permet d'afficher ou non le message d'avertissement filtre
         * @param {string} nomFiltre1
         * @param {string} nomFiltre2
         * @param {string} nomFiltre3
         * @param {string} nomFiltre4
         * @return {void}
         */
        public afficherMessageAvertissementFiltre(nomFiltre1: string, nomFiltre2: string, nomFiltre3: string, nomFiltre4: string): void {
            this.nomFiltre1 = nomFiltre1;
            this.nomFiltre2 = nomFiltre2;
            this.nomFiltre3 = nomFiltre3;
            this.nomFiltre4 = nomFiltre4;
        } 

        public getEtatNbIndicateurs(): string {
            if (!this.panierEnCours) {
                return "";
            }
            return `Nombre d'indicateurs: ${this.listeTuilePanierSettings.length}/${Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX}`; 
        }

        public getEtatNbSelections(): string {
            if (!this.listePaniers) {
                return "";
            }
            return `${this.listePaniers.length}/${Constantes.Application.LIMITE_NB_PANIERS}`;
        }


        public getRoleIndicateurSelection(): string {
            if (this.erreurSelection) {
                return "alert";
            } else {
                return undefined;
            }
        }

        public getRoleIndicateurNom(): string {
            if (this.myForm["nom"].$invalid) {
                return "alert";
            } else {
                return undefined;
            }
        }

        /**
         * Méthode pour passer en mode édition sur le panier en cours
         */
        public gererSelection(): ng.IPromise<void> {
            
            // ajoute une action remarquable
            this.contexteService.tracerSuiviAction(SelectionIndicateursControleur.logger, Constantes.ActionsRemarquables.BTN_PERSO_INDIC);
        
            if (this.panierEnCours) {
                this.estEnEditionPanier = true;
                this.modalePaniersService.majEstEditionPanier(true);
                // On sauve le nom de la selection qui va être modifier en cas d'annulation
                this.nomSelTemp = this.panierEnCours.nom;
                this.chargementEnCours = true;
                return this.initialiser().then(() => {
                    this.chargementEnCours = false;
                });
            } else {
                this.erreurSelection = true;
                return this.$q.when();
            }
        }

        /**
         * Méthode de changement de selection dans la combo de la liste des sélections
         * @param $item
         */
        public changePanier($item: Modeles.Application.IPanier): ng.IPromise<void> {
            this.panierEnCours = $item;
            this.erreurSelection = false;
            // on initialise
            return this.initialiser();
        }

        /**
         * Méthode pour passer en mode édition sur une nouvelle sélection
         */
        public ajouterSelection(): ng.IPromise<void> {
            this.panierEnCours = Services.Utils.ApplicationUtils.recupererNouvelleSelection();
            this.listePaniers.push(this.panierEnCours);
            this.estEnEditionPanier = true;
            this.modalePaniersService.majEstEditionPanier(true);
            this.estCreationSelection = true;
            return this.initialiser();
        }

        /**
         * Méthode de mise à jour du panier par défaut et de retour à la page précédente
         */
        public appliquer(): ng.IPromise<void> {
            if (this.panierEnCours) {
                this.chargementEnCours = true;
                _.forEach(this.listePaniers, (panier: Modeles.Application.IPanier) => {
                    if (panier.numero === this.panierEnCours.numero) {
                        panier.estDefaut = true;
                    } else {
                        panier.estDefaut = false;
                    }
                });
                return this.majIndicateursClientsPanierEnCours().then(() => {
                    return this.preferencesService.ecrirePaniers(this.listePaniers).then(() => {
                        this.$location.path(Constantes.Url.CLIENTS);
                        return this.$q.when();
                    });
                });
            } else {
                this.erreurSelection = true;
                return this.$q.when();
            }
        }

        /**
         * Méthode permettant de mettre à jour les indicateurs clients pour le panier en cours 
         * @returns {ng.IPromise<void>}
         */
        private majIndicateursClientsPanierEnCours(): ng.IPromise<void> {
            return this.majIndicateursClientsPanier(this.panierEnCours.listeChoixIndicateurs);
        }

        /**
         * Méthode permettant de mettre à jour les indicateurs clients pour le panier par defaut 
         * @returns {ng.IPromise<void>}
         */
        private majIndicateursClientsPanierDefaut(): ng.IPromise<void> {
            return this.majIndicateursClientsPanier(this.panierDefaut.listeChoixIndicateurs);
        }

        private majIndicateursClientsPanier(listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>): ng.IPromise<void> {
            // on va mettre à jour la liste relation avec les nouveaux indicateurs paramétrables si nécéssaire
            let listeEcartIndicateursParametrables: Array<Modeles.Application.IIndicateurType> =
                this.indicateurService.getListeEcartIndicateurParametrable(listeChoixIndicateurs);
            this.indicateurService.setListeIndicateurChoix(listeChoixIndicateurs);
            if (listeEcartIndicateursParametrables.length > 0) {
                return this.listeClientsService.majClientsIndicateurs(listeEcartIndicateursParametrables);
            } else {
                return this.$q.when();
            }
        }

        /**
         * Méthode de retour à la page client sans modification du panier par défaut: il faut cependant prendre en compte les modifications faites sur le panier par defaut initial
         */
        public retour(): ng.IPromise<void> {
            this.chargementEnCours = true;
            if (this.panierDefaut) {
                return this.majIndicateursClientsPanierDefaut().then(() => {
                    this.$location.path(Constantes.Url.CLIENTS);
                    return this.$q.when();
                });
            } else {
                this.$location.path(Constantes.Url.CLIENTS);
                return this.$q.when();
            }
        }

        /**
         * méthode de retour à l'état initial de la page
         */
        public annulerModifSelection(): ng.IPromise<void> {
            this.chargementEnCours = true;
            // On remet le nom initial de la selection
            if (!this.estCreationSelection) {
                this.panierEnCours.nom = this.nomSelTemp;
            } else {
                // on supprime la selection en cours de creation
                _.remove(this.listePaniers, (panier: Modeles.Application.IPanier) => {
                    return !panier.numero;
                });
                // on remet en panierEncours le panier par defaut
                this.panierEnCours = Services.Utils.ApplicationUtils.recupererPanierDefaut(this.listePaniers);
            }
            this.estEnEditionPanier = false;
            this.modalePaniersService.majEstEditionPanier(false);
            return this.initialiser().then(() => {
                this.chargementEnCours = false;
            });
        }

        /**
         * Méthode d'enregistrement de de la sélection
         */
        public enregistrerSelection(): ng.IPromise<void> {
            this.chargementEnCours = true;
            if (this.estFormulaireValide()) {
                this.majPanierEnCoursAvecListeTuilesPanierSettings();
                if (!this.panierDefaut) { // Cas ou on n'a pas de panier 
                    this.panierDefaut = this.panierEnCours;
                }
                return this.preferencesService.ecrirePaniers(this.listePaniers).then(() => {
                    this.estEnEditionPanier = false;
                    this.modalePaniersService.majEstEditionPanier(false);
                    return this.initialiser().then(() => {
                        this.chargementEnCours = false;
                    });
                });
                
            } else {
                this.chargementEnCours = false;
                return this.$q.reject();
            }
        }

        public estNomAChanger(): boolean {
            if (!Services.Utils.ApplicationUtils.estOkNomSelection(this.panierEnCours.nom)) {
                return true;
            } else {
                return false;
            }
        }

        public estFormulaireValide(): boolean {
            if (!this.panierEnCours.nom) {
                this.messageErreurNomSelection = "Le nom de la sélection est obligatoire";
                return false;
            } else {
                let rep: boolean = true;
                // on vérifie si on n'a pas deja une autre sélection avec ce nom
                _.find(this.listePaniers, (selection: Modeles.Application.IPanier) => {
                    
                    if (selection.nom.toLowerCase() === this.panierEnCours.nom.toLowerCase() && selection.numero !== this.panierEnCours.numero) {
                        this.messageErreurNomSelection = "Nom de sélection déja utilisé";
                        rep = false;
                    };
                });
                if (rep) {
                    this.messageErreurNomSelection = "";
                }
                return rep;
            }
        }

        public afficherTuileEmplacementVide(): boolean {
            return this.listeTuilePanierSettings.length < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX;
        }

        /**
         * Méthode de mise à jour du panier en cours avec listeTuilePanierSettings
         */
        private majPanierEnCoursAvecListeTuilesPanierSettings(): void {
            this.panierEnCours.listeChoixIndicateurs = [];
            _.forEach(this.listeTuilePanierSettings, (tuilePanierSettings: Modeles.Application.ITuilePanierSettings) => {
                let indic: Modeles.Application.IIndicateurChoix = tuilePanierSettings.indicateur;
                this.panierEnCours.listeChoixIndicateurs.push(indic);
            });
        }

    }

    // Déclaration du controleur
    app.controller(SelectionIndicateursControleur.CLASS_NAME, SelectionIndicateursControleur);
}