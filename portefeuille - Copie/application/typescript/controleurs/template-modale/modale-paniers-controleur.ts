/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur de la modale des paniers
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModalePaniersControleur {
        public static CLASS_NAME: string = "ModalePaniersControleur";
        private static logger: MyWay.Services.Loggers.ILogger = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModalePaniersControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$rootScope,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Services.modalePaniersService,
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.MyWay.data,
            Constantes.Inject.Services.preferencesService,
            Constantes.Inject.Services.popupService,
            Constantes.Inject.Services.indicateurService,
            Constantes.Inject.Services.listeClientsService,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.MyWay.mwEvents,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Angular.$anchorScroll
        ];

        // Variables d'entrée
        public listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        public listePaniers: Array<Modeles.Application.IPanier>;
        public listeFiltresClients: Array<Modeles.Application.IFiltre>;
        public listeFiltresRelationEco: Array<Modeles.Application.IFiltre>;

        // Variables utiles
        public panierEnCours: Modeles.Application.IPanier;
        public listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>;
        public listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>;
        public listeCodesIndicateursPanierInit: Array<string>;
        public panierDropSettings: Modeles.Application.IDropSettings;
        public poubelleDropSettings: Modeles.Application.IDropSettings;
        public estAfficherDropPanier: boolean;
        public estAfficherBoutonAjouter: boolean;
        public estEnEditionPanier: boolean;
        public estEnEditionCatalogue: boolean;
        public nomFiltre1: string;
        public nomFiltre2: string;
        public nomFiltre3: string;
        public nomFiltre4: string;
        public chargementEnCours: boolean;
        public listeErreurs: Modeles.Application.IMessageErreurIHM[];
        public txtAjoutPerso: string;

        /**
         * Constructeur
         */
        constructor(
            private $rootScope: ng.IRootScopeService,
            private $scope: ng.IScope,
            private modalePaniersService: Services.Application.IModalePaniersService,
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private data: Modeles.Application.IPopupData<any>,
            private preferencesService: Services.Application.IPreferencesService,
            private popupService: Services.Application.IPopupService,
            private indicateurService: Services.Application.IIndicateurService,
            private listeClientsService: Services.Application.IListeClientsService,
            private $q: ng.IQService,
            private mwEvents: MyWay.UI.IMwEvents,
            private $location: ng.ILocationService,
            private scroll: ng.IAnchorScrollService
        ) {
            // Récupération des données transmises
            this.listeTotaleIndicateurs = data.model.listeTotaleIndicateurs;
            this.listePaniers = data.model.listePaniers ? data.model.listePaniers : [];
            this.listeFiltresClients = data.model.listeFiltresClients;
            this.listeFiltresRelationEco = data.model.listeFiltresRelationEco;
            this.txtAjoutPerso = Constantes.Application.CHAINE_AJOUT_PERSONNALISATION;
            this.listeErreurs = [];
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): void {
            this.chargementEnCours = false;
            ModalePaniersControleur.logger.info(">>> Appel de la méthode : ModalePaniersControleur.initialiser <<<");
            
            this.modalePaniersService.setModalePaniersControleur(this);

            // Initialisation variables
            this.estAfficherDropPanier = false;
            this.estEnEditionPanier = false;

            // Récupération du premier panier
            //this.panierEnCours = this.listePaniers[0];

            // Gestion de panier vide: on créer une nouvelle selection
            if (this.listePaniers.length === 0) {
                this.ajouterSelection();
            }

            // Récupération du premier defaut
            let lstPanierDefaut = _.where(this.listePaniers, { "estDefaut": true });
            this.panierEnCours = lstPanierDefaut.length > 0 ? lstPanierDefaut[0] : this.listePaniers[0];

            // Nouvelle selection
            if (this.listePaniers.length < Constantes.Application.LIMITE_NB_PANIERS
                && this.panierEnCours.nom) {
                this.listePaniers.push(this.recupererPanierFacticeAjoutSelection());
            }

            // Gestion erreur si on arrive avec un panier sans nom
            if (this.panierEnCours.numero) {
                this.estFormulaireValide();
            }

            // Creation de listeTuileCatalogueSettings
            this.listeTuileCatalogueSettings = [];
            _.forEach(this.listeTotaleIndicateurs, (indicateur: Modeles.Application.IIndicateurType) => {

                if (indicateur.estVisibleColonne) {

                    let tuileCatalogueSettings = <Modeles.Application.ITuileCatalogueSettings>{};
                    tuileCatalogueSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
                    tuileCatalogueSettings.estEnEdition = false;

                    // Récupération de l'indicateur
                    let indicateurExistant = _.find(this.panierEnCours.listeChoixIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                        return indicateurChoix.indicateur.code === indicateur.code;
                    });

                    if (indicateurExistant) {
                        tuileCatalogueSettings.indicateur = indicateurExistant;
                    } else {
                        let indicateurCatalogue = <Modeles.Application.IIndicateurChoix>{};
                        indicateurCatalogue.indicateur = indicateur;
                        indicateurCatalogue.choisi = false;
                        tuileCatalogueSettings.indicateur = indicateurCatalogue;
                    }

                    this.listeTuileCatalogueSettings.push(tuileCatalogueSettings); 
                }
            });

            // Création de listeTuilePanierSettings
            this.listeTuilePanierSettings = [];
            _.forEach(this.panierEnCours.listeChoixIndicateurs, (indicateur: Modeles.Application.IIndicateurChoix) => {

                let tuilePanierSettings = <Modeles.Application.ITuilePanierSettings>{};
                tuilePanierSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
                tuilePanierSettings.indicateur = indicateur;
                tuilePanierSettings.estEnEdition = false;

                this.listeTuilePanierSettings.push(tuilePanierSettings); 
            });

            //// Init affichage ou non du bouton Ajouter
            //if (this.listeTuilePanierSettings.length < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
            //    this.setEstAfficherBoutonAjouter(true);
            //} else {
            //    this.setEstAfficherBoutonAjouter(false);
            //}

            // Création des paramètres du drop du panier
            this.panierDropSettings = this.modalePaniersService.creerDropSettings(this.panierDeposeEvent);

            // Création des paramètres du drop de la poubelle
            this.poubelleDropSettings = this.modalePaniersService.creerDropSettings(this.poubelleDeposeEvent);
        }

        private recupererPanierFacticeAjoutSelection(): Modeles.Application.IPanier {
            let panierFactice: Modeles.Application.IPanier = <Modeles.Application.IPanier>{
                numero: 0, estDefaut: false, listeChoixIndicateurs: null, nom: Constantes.Application.CHAINE_AJOUT_PERSONNALISATION
            };
            return panierFactice;
        }

        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé dans le panier
         */
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
            }

            // Mise à jour du message d'avertissement de modification de filtre
            this.modalePaniersService.afficherMessageAvertissementFiltre(
                this.listeFiltresRelationEco,
                this.listeFiltresClients,
                _.pluck(this.listeTuilePanierSettings, "indicateur"));

            //this.$scope.$applyAsync();
            this.$scope.$apply();
        };

        /**
         * Méthode permettant de modifier l'état du drop panier
         * @param {boolean} estAfficher
         * @returns {void}
         */
        public setEstActiverDropPanier(estAfficher: boolean): void { 
            this.estAfficherDropPanier = estAfficher;

            if (estAfficher) {
                this.panierDropSettings.activerDragOver();
            } else {
                this.panierDropSettings.desactiverDragOver();
            }

            //this.$scope.$applyAsync();
            this.$scope.$apply();
        }

        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé dans la poubelle
         */
        public poubelleDeposeEvent = (tuilePanierSettings: Modeles.Application.ITuilePanierSettings) => {

            // Si Mode édtion catalogue
            if (this.estEnEditionCatalogue) {
                // Récupération de la tuile catalogue
                let tuileCatalogue = _.find(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                    return tuile.indicateur.indicateur.code === tuilePanierSettings.indicateur.indicateur.code;
                });

                tuileCatalogue.estEnEdition = true;
            }

            this.modalePaniersService.supprimerIndicateurPanier(
                tuilePanierSettings,
                this.listeTuileCatalogueSettings,
                this.listeTuilePanierSettings,
                this.listeFiltresClients,
                this.listeFiltresRelationEco);

            // On cache le drop poubelle
            this.setEstAfficherDropPoubelle(false);

            // On desactive les drops des tuiles du panier
            this.modalePaniersService.desactiverDropTuilesPanier(this.listeTuilePanierSettings);
        };

        /**
         * Méthode permettant de modifier l'état du drop poubelle
         * @param {boolean} estAfficher
         * @returns {void}
         */
        public setEstAfficherDropPoubelle(estAfficher: boolean): void {
            if (estAfficher) {
                this.poubelleDropSettings.activerDragOver();
            } else {
                this.poubelleDropSettings.desactiverDragOver();
            }
            //this.$scope.$applyAsync(); 
            this.$scope.$apply(); 
        }

        /**
         * Méthode permettant de modifier l'état du bouton ajouter
         * @param {boolean} estAfficher
         * @returns {void}
         */
        public setEstAfficherBoutonAjouter(estAfficher: boolean): void {
            this.estAfficherBoutonAjouter = estAfficher;
            //this.$scope.$applyAsync();
            this.$scope.$apply();
        }

        /**
         * Méthode permettant de rafraichir listeTuileCatalogueSettings
         * @return {void}
         */
        public rafraichirListeTuileCatalogueSettings(): void {
            let listeTemp = this.listeTuileCatalogueSettings;
            this.listeTuileCatalogueSettings = [];
            //this.$scope.$applyAsync();
            this.$scope.$apply();
            this.listeTuileCatalogueSettings = listeTemp;
            //this.$scope.$applyAsync();
            if (this.estEnEditionCatalogue) {
                _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                    if (!tuile.indicateur.choisi) {
                        if (this.getNombreIndicateurPanier() < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
                            tuile.estEnEdition = true;
                        }
                        if (tuile && tuile.dragSettings) {
                            tuile.dragSettings.desactiverDrag();
                        }
                    }
                });
            }
            if (this.estEnEditionPanier) {
                _.forEach(this.listeTuilePanierSettings, (tuile: Modeles.Application.ITuilePanierSettings) => {
                    tuile.estEnEdition = true;
                    if (tuile && tuile.dragSettings) {
                        tuile.dragSettings.desactiverDrag();
                    }
                });
            }

            this.$scope.$apply();
        }

        /**
         * Méthode permettant de retourner le nombre d'indicateur présent dans le panier en cours
         * @return {void}
         */
        public getNombreIndicateurPanier(): number {
            return this.listeTuilePanierSettings.length;
        }

        public ajouterSelection(): void {
            // on met "estDefaut" à false pour les paniers existants
            _.forEach(this.listePaniers, (panierTemp: Modeles.Application.IPanier) => {
                panierTemp.estDefaut = false;
            });
            // on ajoute un panier vide
            this.listePaniers.push(<Modeles.Application.IPanier>{ nom: "", listeChoixIndicateurs: [], estDefaut: true, numero: undefined });
        }

        /**
         * Action du bouton "Ajouter"
         * @returns {void}
         */
        public ajouterIndicateur(): void {
            this.estEnEditionCatalogue = true;

            // Modification des paramètres des tuiles catalogues
            _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                if (!tuile.indicateur.choisi) {
                    tuile.estEnEdition = true;
                    tuile.dragSettings.desactiverDrag();
                }
            });

            // Enregistrement de la liste du panier
            this.listeCodesIndicateursPanierInit = _.pluck(this.listeTuilePanierSettings, "indicateur.indicateur.code");
        } 

        /**
         * Action du bouton "Mode édition"
         * @returns {void}
         */
        public activerModeEditionPanier(): void {
            this.estEnEditionPanier = true;

            // Modification des paramètres des tuiles panier
            _.forEach(this.listeTuilePanierSettings, (tuile: Modeles.Application.ITuilePanierSettings) => {
                tuile.estEnEdition = true;
                tuile.dragSettings.desactiverDrag();
            });

            // Partie ajout indicateurs
            this.estEnEditionCatalogue = true;
            // Modification des paramètres des tuiles catalogues
            _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                if (!tuile.indicateur.choisi) {
                    if (this.getNombreIndicateurPanier() < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
                        tuile.estEnEdition = true;
                    }
                    tuile.dragSettings.desactiverDrag();
                }
            });

            // Enregistrement de la liste du panier
            this.listeCodesIndicateursPanierInit = _.pluck(this.listeTuilePanierSettings, "indicateur.indicateur.code");
        }

        /**
         * Action du bouton "Supprimer la selection"
         * @returns {void}
         */
        public supprimerTousLesIndicateurs(): void {
            let listeTemp = [];
            _.forEach(this.listeTuilePanierSettings, (tuilePanierSettings: Modeles.Application.ITuilePanierSettings) => {
                listeTemp.push(tuilePanierSettings);
            });

            _.forEach(listeTemp, (tuilePanierSettings: Modeles.Application.ITuilePanierSettings) => {
                this.modalePaniersService.supprimerIndicateurPanier(
                    tuilePanierSettings,
                    this.listeTuileCatalogueSettings,
                    this.listeTuilePanierSettings,
                    this.listeFiltresClients,
                    this.listeFiltresRelationEco);
            });

            //this.setEstAfficherBoutonAjouter(true);
        }

        /**
         * Action du bouton "Enregistrer" en édition panier
         * @returns {void}
         */
        public enregistrerEditionPanier(): void {
            this.initFinEditionPanier();
            this.enregistrerEditionCatalogue();
        }

        /**
         * Action du bouton "Annuler" en édition panier
         * @returns {void}
         */
        public annulerEditionPanier(): void {
            this.initFinEditionPanier();
            this.remettrePanierInitial();
            this.annulerEditionCatalogue();
        }

        /**
         * Méthode permettant d'initialiser la modale lors de la fin de l'édition Panier
         * @returns {void}
         */
        private initFinEditionPanier(): void {
            this.estEnEditionPanier = false;

            //if (this.getNombreIndicateurPanier() < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
            //    this.setEstAfficherBoutonAjouter(true);
            //}

            // Modification des paramètres des tuiles panier
            _.forEach(this.listeTuilePanierSettings, (tuile: Modeles.Application.ITuilePanierSettings) => {
                tuile.estEnEdition = false;
                tuile.dragSettings.activerDrag();
            });
        }

        /**
         * Action du bouton "Enregistrer" en édition catalogue
         * @returns {void}
         */
        public enregistrerEditionCatalogue(): void {
            this.initFinEditionCatalogue();
        }

        /**
         * Action du bouton "Annuler" en édition catalogue
         * @returns {void}
         */
        public annulerEditionCatalogue(): void {
            this.initFinEditionCatalogue();
            this.remettrePanierInitial();
        }

        /**
         * Méthode permettant d'initialiser la modale lors de la fin de l'édition Catalogue
         * @returns {void}
         */
        private initFinEditionCatalogue(): void {
            this.estEnEditionCatalogue = false;

            // Modification des paramètres des tuiles catalogue
            _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                tuile.estEnEdition = false;

                if (this.getNombreIndicateurPanier() === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
                    tuile.dragSettings.desactiverDrag();
                } else if (tuile.indicateur.choisi) {
                    tuile.dragSettings.desactiverDrag();
                } else {
                    tuile.dragSettings.activerDrag();
                }
            });
        }

        /**
         * Méthode permettant de remettre le panier initial
         * @returns {void}
         */
        private remettrePanierInitial(): void {
            // RAZ de la liste des tuiles du panier
            this.listeTuilePanierSettings = [];

            // Remise en place de l'ancien panier
            _.forEach(this.listeCodesIndicateursPanierInit, (code: string) => {

                let tuileCatalogue = _.find(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {
                    return tuile.indicateur.indicateur.code === code;
                });

                let tuilePanierSettings = <Modeles.Application.ITuilePanierSettings>{};
                tuilePanierSettings.id = this.modalePaniersService.genererIdentifiantAleatoire();
                tuilePanierSettings.indicateur = tuileCatalogue.indicateur;
                tuilePanierSettings.indicateur.choisi = true;
                tuilePanierSettings.estEnEdition = false;

                this.listeTuilePanierSettings.push(tuilePanierSettings);
            });

            // Remise en place de l'ancien catalogue
            _.forEach(this.listeTuileCatalogueSettings, (tuile: Modeles.Application.ITuileCatalogueSettings) => {

                let tuileCatalogue = _.find(this.listeCodesIndicateursPanierInit, (code: string) => {
                    return tuile.indicateur.indicateur.code === code;
                });

                if (!tuileCatalogue) {
                    tuile.indicateur.choisi = false;
                }
            });

            if (this.listeTuilePanierSettings.length === Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX) {
                this.modalePaniersService.cacherBoutonValider();
            } else {
                this.modalePaniersService.afficherBoutonValider();
            }

            // Mise à jour du message d'avertissement de modification de filtre
            this.modalePaniersService.afficherMessageAvertissementFiltre(
                this.listeFiltresRelationEco,
                this.listeFiltresClients,
                _.pluck(this.listeTuilePanierSettings, "indicateur"));

            // Rafraichir listeTuileCatalogueSettings
            this.rafraichirListeTuileCatalogueSettings();
        }

        /**
         * Méthode permettant de mettre à jour les indicateurs clients
         * @returns {ng.IPromise<void>}
         */
        private majIndicateursClients(): ng.IPromise<void> {
            // on va mettre à jour la liste relation avec les nouveaux indicateurs paramétrables si nécéssaire
            let listeEcartIndicateursParametrables: Array<Modeles.Application.IIndicateurType> = this.indicateurService.getListeEcartIndicateurParametrable(this.panierEnCours.listeChoixIndicateurs);
            this.indicateurService.setListeIndicateurChoix(this.panierEnCours.listeChoixIndicateurs);
            if (listeEcartIndicateursParametrables.length > 0) {
                return this.listeClientsService.majClientsIndicateurs(listeEcartIndicateursParametrables);
            } else {
                return this.$q.when();
            }
        }

        /**
         * Méthode appelé lors de la selection d'un panier
         * @returns {void}
         */
        public changePanier($item: Modeles.Application.IPanier): void {
            if ($item.numero === 0) {
                this.ajouterSelection();
            } else {
                // on met à defaut le panier choisi
                _.forEach(this.listePaniers, (panier: Modeles.Application.IPanier) => {
                    if (panier.nom === $item.nom) {
                        panier.estDefaut = true;
                    } else {
                        panier.estDefaut = false;
                    }
                });
            }
            // supression du panier factice d'ajout de selection
            _.remove(this.listePaniers, (panier: Modeles.Application.IPanier) => {
                return panier.numero === 0;
            });
            // on initialise
            this.initialiser();
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

        /**
         * Méthode de vérification que le formaulaire est valide
         */
        private estFormulaireValide(): boolean {
            if (!this.panierEnCours.nom) {
                //this.myForm["nom"].$invalid = true;
                this.listeErreurs.push({ message: "Le champ Nom est obligatoire", champs: "Nom", ancre: "id-nom" });
                return false;
            }
            return true;
        }

        public goToAnchor(ancre: string): void {
            this.$location.hash(ancre);
            this.scroll.yOffset = 100;
            this.scroll();
        } 

        /**
         * Action du bouton "Valider"
         * @returns {ng.IPromise<void>}
         */
        public valider(): ng.IPromise<void> {
            this.goToAnchor("id-erreur-form");
            if (this.estFormulaireValide()) {
                this.chargementEnCours = true;
                this.panierEnCours.listeChoixIndicateurs = _.pluck(this.listeTuilePanierSettings, "indicateur");
                return this.majIndicateursClients()
                    .then(() => {
                        return this.preferencesService.ecrirePaniers(this.listePaniers);
                    })
                    .then(() => {
                        let donneesDeSortie = <Modeles.Application.IDonneesEntreeSortiePopupIndicateurs>{};
                        donneesDeSortie.panier = this.panierEnCours;
                        this.chargementEnCours = false;
                        this.$modalInstance.close(donneesDeSortie);
                    }).catch((erreur: MyWay.Services.Erreur) => {
                        ModalePaniersControleur.logger.error("Erreur lors de l'enregistrement du panier dans les préférences", erreur.codeLibelle, erreur.libelle);
                        this.chargementEnCours = false;
                        this.popupService.showErreur(erreur);
                    });
            } else {
                return this.$q.when();
            }
        }

        /**
         * Méthode pour savoir s'il faut afficher ou non le bouton gérer la selection
         * @returns {boolean}
         */
        public estAfficheBtnGererLaSelection(): boolean {
            //return !this.estEnEditionPanier && this.getNombreIndicateurPanier() > 0;
            return !this.estEnEditionPanier;
        }

        /**
         * Méthode pour savoir s'il faut afficher ou non le bouton supprimer la selection
         * @returns {boolean}
         */
        public estAfficheBtnSupprimerLaSelection(): boolean {
            return this.getNombreIndicateurPanier() > 0;
        }

        /**
         * Méthode pour savoir s'il faut afficher ou non le bouton valider
         * @returns {boolean}
         */
        public estValidable(): boolean {
            return this.estEnEditionPanier || this.estEnEditionCatalogue || !this.panierEnCours;
        }

        public estChangementPanierDisponible(): boolean {
            if (this.panierEnCours.nom) {
                return true;
            }
            return false;
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
    app.controller(ModalePaniersControleur.CLASS_NAME, ModalePaniersControleur);
}
